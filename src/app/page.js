import Description from "@/components/Description";
import HeaderAndFooter from "@/components/HeaderAndFooter";
import ProjectSkillsBlog from "@/components/ProjectSkillsBlog";



export default function Home() {
  return (
<section className="">
<main  className="flex min-h-screen flex-col items-center justify-between p-24">
    
    {/* header and footer */}
    <HeaderAndFooter />
    {/* description */}
    <Description className='' />
    {/* project/skills/blog/etc? */}
    <ProjectSkillsBlog />
   
  </main>
</section>
    
  );
}
