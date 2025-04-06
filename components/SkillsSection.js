import data from '@/data/data.json'
import SectionHeader from './UI/SectionHeader';
import IconsRow from './UI/IconsRow';

const SkillsSection = () => {

  const {skills} = data.data;

  // Split the skills array into three rows: 7, 6, 7
  const row1 = skills.slice(0, 7); // First 7 icons
  const row2 = skills.slice(7, 13); // Next 6 icons
  const row3 = skills.slice(13, 20); // Last 7 icons
  const remainingIcons = skills.slice(20); 

  // Function to extract skill name from the icon path
  const getSkillName = (path) => {
    const fileName = path.split('/').pop(); 
    return fileName.split('.')[0]; 
  };

  return (
    <section id="skills" className="bg-black text-white py-6">
      <div className="mx-auto px-6 md:px-8 lg:px-16">

        <SectionHeader title={'skills'} description={'Expert in Full Stack Development, Software Development and Blockchain Development.'} linkText={''} link={''} />

        {/* Skills Rows */}
        <div className="space-y-4 mt-6 md:mt-24 px-0 md:px-8 lg:px-16 opacity-90">

          {/* Row 1: 7 icons */}
          <div className="flex justify-between mb-0 md:mb-20">
            {row1.map((skill, index) => (
              <div key={index}>
                <IconsRow skill={skill} index={index} getSkillName={getSkillName} />
              </div>
            ))}
          </div>

          {/* Row 2: 6 icons */}
          <div className="flex justify-around mb-0 md:mb-20">
            {row2.map((skill, index) => (
              <div key={index}>
                <IconsRow skill={skill} index={index} getSkillName={getSkillName} />
              </div>
            ))}
          </div>

          {/* Row 3: 7 icons */}
          <div className="flex justify-between">
            {row3.map((skill, index) => (
              <div key={index}>
                <IconsRow skill={skill} index={index} getSkillName={getSkillName} />
              </div>
            ))}
          </div>

          {/* Optional: Additional row for remaining icons (if any) */}
          {remainingIcons.length > 0 && (
            <div className="flex justify-between">
              {remainingIcons.map((skill, index) => (
                <div key={index}>
                  <IconsRow skill={skill} index={index} getSkillName={getSkillName} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;