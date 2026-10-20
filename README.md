# Career Interest Explorer

A free, anonymous career interest quiz for students, built on John Holland's RIASEC model of vocational interests. Students rate 48 everyday work activities, receive a three-letter interest code, and see the fields and careers that people with similar interests often enjoy. It runs entirely in the browser as a simple static website, so it can be hosted for free on GitHub Pages.

This is an informal approximation of the O*NET® Interest Profiler. It is meant for career exploration and conversation, not for formal assessment or placement.

## What it does

Holland's theory sorts work interests into six types, often called RIASEC:

| Code | Type | Sometimes called | Likes work that involves |
|---|---|---|---|
| R | Realistic | Doers | Tools, machines, building, plants and animals, the outdoors |
| I | Investigative | Thinkers | Research, analysis, science, solving complex problems |
| A | Artistic | Creators | Self-expression, design, writing, music, performance |
| S | Social | Helpers | Teaching, caring for, advising, and supporting people |
| E | Enterprising | Persuaders | Leading, selling, starting projects, influencing others |
| C | Conventional | Organizers | Data, records, detail, clear procedures |

Students rate each activity on a five-point scale from "Strongly dislike" to "Strongly like." There are eight activities for each type, presented six to a page so that every page has one activity from each type. Each type is scored from 8 to 40, and the three highest scores form the student's interest code (for example, **SAI**).

The results page shows:

- the student's three-letter code and a hexagon chart of all six scores, arranged in Holland's traditional R-I-A-S-E-C order
- the six scores ranked from highest to lowest
- a detailed card for each of the top three types, with a description, typical work settings, fields to explore, and ten example careers
- a set of careers that combine the student's top two types
- short notes when the results need explaining, such as ties, very even scores, or low scores overall
- a pop-up profile for every career (130 in all), covering what the job involves, three typical tasks, and how people usually get started in it
- buttons to print or save the results as a PDF and to start over

## How it's often used

Interest inventories like this one are common in high school and early college settings, including:

- **Senior seminars and advisory periods**, as a starting point for discussing life after graduation
- **Career and college readiness units**, before students research specific careers or programs
- **One-on-one meetings with a counselor or advisor**, where a student brings printed results to talk through
- **First-year college success courses**, to help undecided students explore possible majors
- **Workforce and adult education programs**, as a low-pressure first step in career planning

The quiz takes about 10 minutes. A typical class session uses the remaining time for students to read about two or three careers that surprised them and share what they found with a partner.

## Privacy

The page collects nothing. It has no sign-in, no names, no cookies, no analytics, and no browser storage, and it makes no network requests to outside services. All answers are held in the browser's memory and disappear when the tab is closed or the student selects "Start over." This makes it suitable for settings where student data privacy rules apply, but check your own district or institution's policies before use.

The only outside link is an optional pointer to the official O*NET Interest Profiler in the "What to do next" section.

## Files

| File | Purpose |
|---|---|
| `index.html` | The whole quiz: page layout, styling, activity statements, scoring, and results |
| `careers.js` | The career profiles shown in the pop-ups |
| `README.md` | This file |

## Setting it up on GitHub Pages

1. Sign in to GitHub and create a new **public** repository (for example, `career-interest-explorer`).
2. Upload `index.html`, `careers.js`, and `README.md` to the top level of the repository. Keep the file names exactly as they are.
3. Go to the repository's **Settings**, then **Pages**.
4. Under "Build and deployment," set the source to **Deploy from a branch**, choose the `main` branch and the `/ (root)` folder, and select **Save**.
5. After a minute or two, the site will be live at `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`. Share that link with students, or turn it into a QR code for the classroom.

The page also works without GitHub. You can open `index.html` directly from a computer or a shared drive, as long as `careers.js` sits in the same folder.

## Trying it out

To see a results page without answering all 48 questions, add `#demo` to the end of the address (for example, `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/#demo`). This fills in random answers and jumps straight to the results. Remove `#demo` before sharing the link with students.

## Customizing

All the content is plain text inside the two files, so it can be edited directly on GitHub with the pencil icon. No programming tools are needed.

- **Activity statements** are in the `ITEMS` list near the top of the script in `index.html`. Each type needs the same number of statements.
- **Type descriptions, fields, and example careers** are in the `INFO` list in `index.html`.
- **Careers that combine two types** are in the `BLENDS` list in `index.html`.
- **Career profiles** are in `careers.js`. Each career listed in `index.html` should have a matching entry here, spelled exactly the same. If a profile is missing, the pop-up says that no profile has been written yet rather than breaking the page.
- **Colors** are set at the top of the `<style>` section in `index.html`, with separate values for light and dark mode.

After editing, GitHub Pages updates the live site automatically within a few minutes.

## Tips for educators

Before students begin, it helps to say:

- This measures what you might **enjoy**, not what you're good at or what you've been trained to do.
- There are no right or wrong answers, and no type is better than another.
- Don't think about pay, education, or whether a job seems realistic. Just ask, "Would I like doing this?"
- Choose "Unsure" if you truly can't decide, but try to lean one way when you can.

When discussing results:

- Treat the code as a starting point for exploring, not a label or a verdict. Interests often shift, especially between ages 16 and 25.
- Encourage students to look at all three letters, not just the first. The combination often says more than any single type.
- Students with very even scores are not "doing it wrong." They may have broad interests or limited exposure to the kinds of work described. Hands-on experiences like job shadowing, volunteering, or part-time work can help clarify them.
- Ask students to pick one career they had never heard of and one they had already considered, then compare what the profiles say about each.

## Limitations

- **This is not the official O*NET Interest Profiler.** The 48 activity statements were written for this project in the style of O*NET work-activity items. They have not been tested for reliability or validity, and scores should not be compared with results from the official tool or other inventories.
- **Career matches are illustrative.** The careers listed for each type and combination are examples chosen to show the range of work connected to each interest area. They are not computed matches from occupational data.
- **Career profiles are general summaries.** Training paths describe typical routes in the United States and can vary by state, employer, and over time. Pay and job outlook are intentionally left out because they change frequently. Have a counselor review the profiles periodically.
- **Interests are only one part of career planning.** Values, skills, life circumstances, and real-world experience all matter.

For a validated measure, students can take the official [O*NET Interest Profiler](https://onetinterestprofiler.org/) from the U.S. Department of Labor.

## Attribution and credits

### The RIASEC model

The six interest types and their hexagonal arrangement come from the work of psychologist **John L. Holland** (1919-2008), whose theory of vocational personalities and work environments is the most widely used framework for understanding career interests.

- Holland, J. L. (1959). A theory of vocational choice. *Journal of Counseling Psychology, 6*(1), 35-45.
- Holland, J. L., Whitney, D. R., Cole, N. S., & Richards, J. M., Jr. (1969). *An empirical occupational classification derived from a theory of personality and intended for practice and research* (ACT Research Report No. 29). American College Testing Program.
- Holland, J. L. (1997). *Making vocational choices: A theory of vocational personalities and work environments* (3rd ed.). Psychological Assessment Resources.

### The O*NET Interest Profiler

This project's design and its five-point like/dislike response scale are modeled on the O*NET Interest Profiler, a free vocational interest inventory introduced in 1999 as one of the U.S. Department of Labor's O*NET Career Exploration Tools. The O*NET Interest Profiler is sponsored by the U.S. Department of Labor, Employment and Training Administration (USDOL/ETA) and developed by the National Center for O*NET Development. Its original development was directed by Phil Lewis and David Rivkin, and James Rounds and colleagues at the University of Illinois at Urbana-Champaign led much of its later psychometric research.

- Lewis, P., & Rivkin, D. (1999). *Development of the O*NET Interest Profiler*. National Center for O*NET Development.
- Rounds, J., Walker, C. M., Day, S. X., Hubert, L., Lewis, P., & Rivkin, D. (1999). *O*NET Interest Profiler: Reliability, validity, and self-scoring*. National Center for O*NET Development.
- Rounds, J., Su, R., Lewis, P., & Rivkin, D. (2010). *O*NET Interest Profiler Short Form psychometric characteristics: Summary*. National Center for O*NET Development.
- Rounds, J., Wee, C. J., Cao, M., Song, C., & Lewis, P. (2016). *Development of an O*NET Mini Interest Profiler (Mini-IP) for mobile devices: Psychometric characteristics*. National Center for O*NET Development.

O*NET® is a trademark of USDOL/ETA. This project is independent. It is not affiliated with, approved, endorsed, or tested by USDOL/ETA or the National Center for O*NET Development. It does not reproduce O*NET Interest Profiler items or O*NET database content: the activity statements, type descriptions, career lists, and career profiles were written for this project.

### Developers

- **[Your name]**, [your role and school or organization], [year]: concept, direction, and review
- **Claude** (Anthropic): code and initial written content, developed with and reviewed by the author above

## License

[Choose a license for this project and state it here. A common choice for teaching materials is the Creative Commons Attribution 4.0 International License (CC BY 4.0), which lets other educators reuse and adapt the work as long as they credit you. If you also want to license the code separately, the MIT License is a common choice for software.]
