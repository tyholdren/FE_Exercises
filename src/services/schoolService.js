const URL_SCHOOLS = 'https://data.cityofnewyork.us/resource/s3k6-pzi2.json';
const URL_SCORES = 'https://data.cityofnewyork.us/resource/f9bf-2cp4.json?dbn=';

export const fetchSchoolsAndScores = async ({
  cityFilter,
  studentFilter,
  offset,
  setSchoolsCache,
  setCurrentSchools,
  setSelectedSchool,
  schoolsCache,
  selectedSchool,
  limit,
}) => {
  let baseURL = `${URL_SCHOOLS}?$limit=${limit}&$offset=${offset}`;

  // Initialize an array to hold query conditions
  let queryCondition = '';

  // Append the city filter if one is provided
  if (cityFilter) {
    queryCondition = `city='${encodeURIComponent(cityFilter)}'`;
  } else if (studentFilter) {
    const [minStudents, maxStudents] = studentFilter;
    queryCondition = `total_students between ${minStudents} and ${maxStudents}`;
  }

  // If there are any query conditions, append them to the base URL
  if (queryCondition) {
    baseURL += `&$where=${queryCondition}`;
  }

  if (schoolsCache[offset] && !cityFilter && !studentFilter) {
    setCurrentSchools(schoolsCache[offset]);
    if (selectedSchool !== undefined && selectedSchool.length === 0) {
      setSelectedSchool([schoolsCache[offset][0]]);
    }
  } else {
    // Fetch new data from the API
    try {
      const schoolsResponse = await fetch(baseURL);
      const schoolsData = await schoolsResponse.json();

      // Get SAT scores for each school
      const schoolsWithScores = await Promise.all(
        schoolsData.map(async school => {
          const scoresResponse = await fetch(`${URL_SCORES}${school.dbn}`);
          const scoresData = await scoresResponse.json();
          return {
            ...school,
            scores: scoresData.length ? scoresData[0] : null,
          };
        })
      );

      // Update cache and current schools state
      const updatedCache = { ...schoolsCache, [offset]: schoolsWithScores };
      setSchoolsCache(updatedCache);
      setCurrentSchools(schoolsWithScores);

      // Set selected school if it's not already set
      if (selectedSchool.length === 0) {
        setSelectedSchool([schoolsWithScores[0]]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
};
