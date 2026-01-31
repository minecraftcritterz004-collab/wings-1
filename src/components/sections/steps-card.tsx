import { Snowflake, Gift } from 'lucide-react';

const steps = [
{
  icon: Snowflake,
  text: 'Click the "Start Review" button'
},
{
  icon: Gift,
  text: 'Enter your email and basic details'
},
{
  icon: Snowflake,
  text: 'Answer the required questions'
},
{
  icon: Snowflake,
  text: 'Complete 4-5 partner offers'
},
{
  icon: Snowflake,
  text: 'Receive your T.J. Maxx Gift Card'
}];


const StepsCard = () => {
  return (
    <div className="relative bg-white backdrop-blur-sm rounded-lg mb-2 border-[2px] border-[#cf102d] shadow-xl overflow-hidden">
      <ol className="relative z-10 text-left space-y-1 text-foreground p-2.5 !text-base !rounded-none">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <li key={index} className="flex items-start gap-1.5 text-[11px] md:text-xs">
                    <span className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center font-bold text-[9px] mt-0.5 text-white" style={{ backgroundColor: '#cf102d', color: '#ffffff' }}>
                      {index + 1}
                    </span>
              <div className="flex items-center gap-1 flex-1">
                <span className="flex-shrink-0" style={{ color: '#cf102d' }}>
                  <Icon className="w-2.5 h-2.5" />
                </span>
                <span className="text-foreground font-medium">{step.text}</span>
              </div>
            </li>);

        })}
      </ol>
    </div>);

};

export default StepsCard;
