import Section from './Section';

export default function SidePanel() {
  const SIDE_PANEL_INFO = [
    { button: 1, step: 'STEP 1', content: 'YOUR INFO' },
    { button: 2, step: 'STEP 2', content: 'SELECT PLAN' },
    { button: 3, step: 'STEP 3', content: 'ADD-ONS' },
    { button: 4, step: 'STEP 4', content: 'SUMMARY' },
  ];

  return (
    <div>
      <div className="side-panel-container">
        {SIDE_PANEL_INFO.map(({ button, step, content }, index) => {
          return (
            <Section
              key={index}
              button={button}
              step={step}
              content={content}
            />
          );
        })}
      </div>
    </div>
  );
}
