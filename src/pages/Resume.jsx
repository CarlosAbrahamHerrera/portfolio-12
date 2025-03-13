import { Container, Typography, Box, Paper, Grid, List, ListItem, ListItemText, Button, Link, Divider } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

function Resume() {
  const skills = {
    'Technical': [
      'HTML/CSS', 'JavaScript', 'React.js', 'TypeScript', 'Node.js', 'Express.js', 
      'REST APIs', 'MySQL', 'MongoDB', 'Git', 'Github', 'CI/CD', 'Python', 'Postgres'
    ],
    'Professional': [
      'Salesforce', 'Zendesk', 'SQL', 'Customer Service', 'Communications',
      'Microsoft Office Suite', 'Google Workspace', 'Data Analysis'
    ],
    'Languages': ['English', 'Spanish'],
  };

  const education = [
    {
      institution: 'Michigan State University',
      credential: 'Bootcamp, Computer Science',
      period: 'December 2024 - June 2025',
      details: ['GPA: 4'],
    }
  ];

  const experience = [
    {
      title: 'Member Support Specialist',
      company: 'Guild Education',
      location: 'Remote',
      period: 'May 2023 - February 2025',
      responsibilities: [
        'Achieved a 95% customer satisfaction rate by providing timely and effective technical support while managing over 60 customer interactions daily via email, chat, and phone, ensuring compliance with SLAs.',
        'Enhanced platform reliability by escalating and resolving bug-related issues through collaboration with Engineering and Product teams, contributing to improved customer service.',
        'Reduced repetitive inquiries by 30% by developing and updating internal support documentation, which improved self-service rates and showcased attention to detail.',
        'Influenced enhancements in the support process by providing insights on customer trends and collaborating with cross-functional teams, ensuring compliance with customer service standards.'
      ],
    },
    {
      title: 'Associate Consultant (Employer Partner Services, Intern)',
      company: 'Guild Education',
      location: 'Remote',
      period: 'December 2023 - April 2024',
      responsibilities: [
        'Enhanced tuition reimbursement efficiency by 20% by collaborating on the onboarding of USAA, improving enterprise client workflows and ensuring compliance with internal standards.',
        'Improved strategic decision-making capabilities by leveraging data insights to provide technical support and enhance customer service for stakeholders.',
        'Increased feedback collection effectiveness by 30% by developing the EPS Tracker to capture customer pain points with attention to detail, driving product development.',
        'Boosted onboarding efficiency by spearheading enhancements to enterprise client workflows, specifically for USAA\'s tuition reimbursement process.'
      ],
    },
    {
      title: 'Customer Service Representative',
      company: 'Elevance Health',
      location: 'Remote',
      period: 'March 2022 - May 2023',
      responsibilities: [
        'Achieved a 97% customer satisfaction score by providing exceptional customer service and technical support while managing over 60 daily inquiries related to billing, account management, and technical troubleshooting.',
        'Reduced resolution times by 20% by liaising with internal teams to streamline issue resolution and process enhancements, ensuring compliance and improved efficiency.',
        'Enhanced team efficiency and accuracy by creating internal training resources with a focus on attention to detail.'
      ],
    },
    {
      title: 'Founder',
      company: 'Herrera Enterprises LLC',
      location: 'Remote',
      period: 'September 2018 - March 2022',
      responsibilities: [
        'Achieved over 40% YoY growth in e-commerce brands Portablendr and Forever Amoure through customer success and data-driven marketing strategies, emphasizing technical support and customer service.',
        'Boosted conversion rates by 25% and improved ROI by 30% through targeted digital marketing campaigns on Facebook, Google, and TikTok, ensuring compliance with platform guidelines and maintaining attention to detail.',
        'Reduced costs by 15% while managing product fulfillment and delivering exceptional customer support to a rapidly expanding customer base, leading a team of virtual assistants with a focus on attention to detail and compliance in operations.'
      ],
    },
    {
      title: 'Inside Sales Representative',
      company: 'Marketing Storm Leads',
      location: 'Guadalajara, Jalisco, Mexico',
      period: 'January 2017 - August 2018',
      responsibilities: [
        'Enhanced customer satisfaction by 20% through exceptional customer service, exceeding monthly appointment-setting goals with persuasive outbound calls introducing roofing services.',
        'Increased scheduling efficiency by 15% by streamlining appointment scheduling, collaborating closely with roofers, and ensuring compliance with company standards.',
        'Improved data accuracy and team communication by maintaining attention to detail in CRM system, managing detailed records of over 100 calls and appointments daily.'
      ],
    },
    {
      title: 'Account Manager',
      company: 'Farrera',
      location: 'Guadalajara, Jalisco, Mexico',
      period: 'January 2015 - January 2017',
      responsibilities: [
        'Enhanced data quality by 25% by identifying and rectifying discrepancies in transcribed source data, applying attention to detail and compliance standards.',
        'Maintained 99% accuracy in data entry tasks by providing technical support to streamline processes, ensuring exceptional efficiency and adherence to departmental standards.',
        'Achieved 100% task completion within deadlines by collaborating effectively with team members and delivering superior customer service and progress updates through designated performance measurement systems.'
      ],
    },
    {
      title: 'Customer Support Specialist',
      company: 'Alorica',
      location: 'Guadalajara, Jalisco, Mexico',
      period: 'February 2014 - January 2015',
      responsibilities: [
        'Resolved over 95% of customer inquiries within the first interaction by delivering comprehensive technical support for Amazon products, ensuring compliance with company policies and maintaining customer privacy.',
        'Maintained a 96% resolution rate by providing detailed attention to technical support inquiries, enhancing customer satisfaction and retention.',
        'Processed over 90 orders, returns, and refunds daily by executing tasks with attention to detail, ensuring compliance with Amazon\'s policies and safeguarding customer privacy and security.'
      ],
    },
    {
      title: 'IT Specialist',
      company: 'Teletech',
      location: 'Guadalajara, Jalisco, Mexico',
      period: 'February 2012 - February 2014',
      responsibilities: [
        'Resolved 91% of technical issues with high customer satisfaction by providing Level 1 technical support for T-Mobile customers, handling an average of 50 daily technical issues related to devices and services.',
        'Reduced resolution time by 25% by streamlining the escalation process for complex cases through detailed documentation and effective communication with Tier 2 support teams, ensuring compliance with service standards.',
        'Contributed to a 15% decrease in overall call volume and a 10% improvement in first-call resolution rate by collaborating with colleagues to address technical challenges, fostering teamwork and shared best practices.',
        'Ensured compliance with customer service standards by maintaining accurate and thorough records, utilizing attention to detail in documenting customer interactions and resolutions.'
      ],
    },
    {
      title: 'Retention & Sales Team Lead',
      company: 'Teleperformance',
      location: 'Guadalajara, Jalisco, Mexico',
      period: 'February 2009 - February 2012',
      responsibilities: [
        'Achieved a 95% customer satisfaction rate and increased sales by 25% as a top 30 nationally ranked sales leader in Mexico for Comcast products and services by implementing proactive upselling and cross-selling strategies while providing exceptional customer service.',
        'Reduced customer churn rate by 20% by delivering technical support and resolving issues for Comcast customers considering service cancellation, handling a high volume of tier 1 retention services.',
        'Maintained a 98% accuracy rate in processing account balances and billing disputes by ensuring compliance and attention to detail in handling billing inquiries and resolving disputes, providing excellent customer service and support.'
      ],
    }
  ];

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h3" component="h1">
            Resume
          </Typography>
          <Button
            variant="contained"
            startIcon={<DownloadIcon />}
            href="/carlos-herrera-resume.pdf"
            target="_blank"
            download
          >
            Download Resume
          </Button>
        </Box>

        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
          <Typography variant="h4" gutterBottom align="center">
            CARLOS HERRERA
          </Typography>
          <Box sx={{ mb: 2, textAlign: 'center' }}>
            <Typography variant="body1">
              +1 (804) 510-8028 | <Link href="mailto:officialcarlosdiaz@gmail.com">officialcarlosdiaz@gmail.com</Link> | Richmond, VA, USA | <Link href="https://linkedin.com/in/carlos-abraham-herrera" target="_blank">linkedin.com/in/carlos-abraham-herrera</Link>
            </Typography>
          </Box>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="h6" gutterBottom>
            PROFESSIONAL SUMMARY
          </Typography>
          <Typography variant="body1" paragraph>
            Customer-focused support specialist with over 9 years of experience in delivering exceptional service and enhancing customer
            satisfaction across various industries. I've managed over 60 daily interactions, consistently achieving high satisfaction scores and
            streamlining processes that led to a 20% reduction in resolution times. My collaborative efforts in developing internal documentation
            and leveraging customer insights have significantly improved self-service rates and platform reliability.
          </Typography>
        </Paper>

        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            EDUCATION
          </Typography>
          {education.map((edu, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="subtitle1" fontWeight="bold">
                  {edu.institution}
                </Typography>
                <Typography variant="subtitle1">
                  {edu.period}
                </Typography>
              </Box>
              <Typography variant="subtitle2">
                {edu.credential}
              </Typography>
              {edu.details.length > 0 && (
                <Typography variant="body2">
                  {edu.details.join(', ')}
                </Typography>
              )}
            </Box>
          ))}
        </Paper>

        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            PROFESSIONAL EXPERIENCE
          </Typography>
          {experience.map((job, index) => (
            <Box key={index} sx={{ mb: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="subtitle1" fontWeight="bold">
                  {job.title}
                </Typography>
                <Typography variant="subtitle2">
                  {job.period}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="subtitle2" color="text.secondary">
                  {job.company}
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  {job.location}
                </Typography>
              </Box>
              <List dense sx={{ pl: 2 }}>
                {job.responsibilities.map((responsibility, idx) => (
                  <ListItem key={idx} sx={{ display: 'list-item', listStyleType: 'disc', pl: 0 }}>
                    <ListItemText primary={responsibility} />
                  </ListItem>
                ))}
              </List>
              {index < experience.length - 1 && <Divider sx={{ my: 2 }} />}
            </Box>
          ))}
        </Paper>

        <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
          <Typography variant="h6" gutterBottom>
            SKILLS
          </Typography>
          <Grid container spacing={3}>
            {Object.entries(skills).map(([category, skillList]) => (
              <Grid item xs={12} md={category === 'Languages' ? 12 : 6} key={category}>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  {category}
                </Typography>
                <Typography variant="body1">
                  {skillList.join(', ')}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
}

export default Resume; 