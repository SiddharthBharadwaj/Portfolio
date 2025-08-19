import { Progress } from "@/components/ui/progress"
import { Shield, Lock, Server, Database, Code, Cloud, Network, FileCode, AlertTriangle } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skillCategories = [
    {
      title: "Security & Testing",
      items: [
        "Web Security",
        "API Security",
        "Penetration Testing",
        "OSINT Techniques",
        "Threat Modeling",
        "Secure Code Review",
      ],
    },
    {
      title: "Languages",
      items: ["Python", "C", "C++", "Java", "Bash"],
    },
    {
      title: "Scripting & Automation",
      items: ["Python automation", "Bash scripting", "Custom Nuclei templates"],
    },
    {
      title: "Cloud Platforms",
      items: ["AWS", "GCP", "DigitalOcean"],
    },
    {
      title: "Networking & Infrastructure",
      items: ["TCP/IP", "VPNs", "DNS", "Firewalls"],
    },
    {
      title: "Version Control & Databases",
      items: ["Git", "SQL", "MySQL", "SQLite"],
    },
    {
      title: "Digital Forensics Tools",
      items: [
        "Cellebrite UFED",
        "MSAB XRY",
        "DVR Examiner",
        "FTK Imager",
        "Physical Analyzer",
      ],
    },
    {
      title: "Security Engineering & DevSecOps (Suggested)",
      items: ["CI/CD", "DevSecOps", "Container Security", "Kubernetes Security"],
    },
  ]
  const technicalSkills = [
    { name: "Penetration Testing", value: 95 },
    { name: "Web & API Security", value: 95 },
    { name: "Python Automation", value: 92 },
    { name: "Cloud Platforms (AWS, GCP, DigitalOcean)", value: 85 },
    { name: "Networking (TCP/IP, VPNs, DNS, Firewalls)", value: 88 },
    { name: "OSINT Techniques", value: 85 },
  ]

  const tools = [
    { name: "Kali Linux", icon: <Server className="h-10 w-10" /> },
    { name: "Burp Suite", icon: <Lock className="h-10 w-10" /> },
    { name: "OWASP ZAP", icon: <AlertTriangle className="h-10 w-10" /> },
    { name: "Nmap", icon: <Network className="h-10 w-10" /> },
    { name: "sqlmap", icon: <Database className="h-10 w-10" /> },
    { name: "Postman", icon: <FileCode className="h-10 w-10" /> },
    { name: "Nuclei", icon: <Shield className="h-10 w-10" /> },
    { name: "Metasploit", icon: <Shield className="h-10 w-10" /> },
    { name: "Docker", icon: <Server className="h-10 w-10" /> },
    { name: "Kubernetes", icon: <Server className="h-10 w-10" /> },
    { name: "Git", icon: <Code className="h-10 w-10" /> },
    { name: "MySQL", icon: <Database className="h-10 w-10" /> },
    { name: "SQLite", icon: <Database className="h-10 w-10" /> },
    { name: "AWS", icon: <Cloud className="h-10 w-10" /> },
    { name: "GCP", icon: <Cloud className="h-10 w-10" /> },
    { name: "DigitalOcean", icon: <Cloud className="h-10 w-10" /> },
  ]

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-emerald-500">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            With expertise across various cybersecurity domains, I bring a comprehensive skill set to protect your
            digital assets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">Technical Expertise</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-emerald-500">{skill.value}%</span>
                  </div>
                  <Progress value={skill.value} className="h-2 bg-gray-800" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">Tools & Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {tools.map((tool) => (
                <div
                  key={tool.name}
                  className="bg-gray-900 border border-gray-800 rounded-lg p-4 flex flex-col items-center justify-center text-center hover:border-emerald-500 transition-colors group"
                >
                  <div className="text-gray-400 group-hover:text-emerald-500 transition-colors mb-3">{tool.icon}</div>
                  <span className="text-gray-300 text-sm">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Categorized Skills */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Skill Categories</h3>
          <div className="grid [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))] gap-6">
            {skillCategories.map((category) => (
              <div key={category.title} className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <h4 className="font-bold text-white mb-3">{category.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <Badge key={item} variant="outline" className="border-emerald-700/50 text-emerald-400">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </section>
  )
}

