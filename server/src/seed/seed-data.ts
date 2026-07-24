/**
 * Cambridge IELTS Cambridge IELTS GT - Question Bank (JSON)
 */

export interface SeedQuestion {
  category: 'reading' | 'listening' | 'speaking' | 'writing'
  section: number
  part: number
  questionType: string
  passage?: string
  audioUrl?: string
  transcript?: string
  cueCard?: string
  writingPrompt?: string
  questions: Array<{
    number: number
    type: string
    stem: string
    options?: string[]
    correctAnswer: string
    explanation: string
  }>
  sampleAnswer?: string
  difficulty: number
}

// ============================================================
// READING (GT)
// ============================================================

export const readingSections: SeedQuestion[] = [
  {
    category: 'reading',
    section: 1,
    part: 1,
    questionType: 'Ads Ads & Notices - Tourist Info Notices - Tourist Info',
    passage: `
      <h3>SECTION 1: Questions 1-14</h3>
      <p><strong>Read the text below and answer Questions 1-7.</strong></p>

      <h4>A — City Sightseeing Bus Tour</h4>
      <p>Explore London's most famous landmarks on our open-top double-decker bus. Tours depart every 30 minutes from Trafalgar Square between 9:00 am and 5:00 pm daily. A full circuit takes approximately 2 hours. Tickets cost £25 for adults and £15 for children aged 5-15. Children under 5 travel free. Audio commentary is available in 8 languages including Mandarin, Japanese, and Arabic. The ticket is valid for 24 hours, allowing you to hop on and off at any of our 35 designated stops throughout the city.</p>

      <h4>B — Thames River Cruise</h4>
      <p>Discover London from the water with our guided river cruise. Boats depart every hour from Westminster Pier from 10:00 am to 4:00 pm. The journey takes you past the Houses of Parliament, the London Eye, Shakespeare's Globe, and Tower Bridge before arriving at Greenwich. The one-way trip takes 90 minutes. Return tickets are £18 for adults and £9 for children. Refreshments are available on board. Group discounts are available for parties of 10 or more.</p>

      <h4>C — Walking Tour of Royal London</h4>
      <p>Join our expert guide for a fascinating 3-hour walking tour through the royal heart of London. Tours start at 10:00 am and 2:00 pm from outside Buckingham Palace. You will see the Changing of the Guard ceremony (morning tour only), St James's Park, and the exterior of Kensington Palace. The tour covers approximately 4 kilometres at a leisurely pace with frequent stops for photographs. Cost: £12 per person. Comfortable walking shoes are strongly recommended as some paths are cobbled.</p>
    `,
    questions: [
      { number: 1, type: 'multiple-choice', stem: 'How often does the City Sightseeing Bus Tour depart?', options: ['Every 15 minutes', 'Every 30 minutes', 'Every hour', 'Every 2 hours'], correctAnswer: 'Every 30 minutes', explanation: 'Paragraph Aclearly mentions "Tours depart every 30 minutes from Trafalgar Square"' },
      { number: 2, type: 'multiple-choice', stem: 'How much does a child ticket cost for the bus tour?', options: ['£12', '£15', '£18', '£25'], correctAnswer: '£15', explanation: 'Paragraph Amentions "£15 for children aged 5-15"' },
      { number: 3, type: 'true-false-ng', stem: 'The bus tour ticket is valid for 48 hours.', options: ['TRUE', 'FALSE', 'NOT GIVEN'], correctAnswer: 'FALSE', explanation: 'clearly states "The ticket is valid for 24 hours"，so 48 hours is incorrect' },
      { number: 4, type: 'true-false-ng', stem: 'The river cruise offers commentary in multiple languages.', options: ['TRUE', 'FALSE', 'NOT GIVEN'], correctAnswer: 'NOT GIVEN', explanation: 'Paragraph Bthe river cruise commentary languages are not mentioned' },
      { number: 5, type: 'multiple-choice', stem: 'How long does the Thames River Cruise one-way trip take?', options: ['60 minutes', '90 minutes', '120 minutes', '180 minutes'], correctAnswer: '90 minutes', explanation: 'Paragraph Bmentions "The one-way trip takes 90 minutes"' },
      { number: 6, type: 'true-false-ng', stem: 'The Walking Tour morning departure allows you to see the Changing of the Guard.', options: ['TRUE', 'FALSE', 'NOT GIVEN'], correctAnswer: 'TRUE', explanation: 'Paragraph Cmentions "You will see the Changing of the Guard ceremony (morning tour only)"' },
      { number: 7, type: 'fill-blank', stem: 'The Walking Tour covers approximately _______ kilometres.', options: undefined, correctAnswer: '4', explanation: 'Paragraph Cclearly states "The tour covers approximately 4 kilometres"' },
      { number: 8, type: 'multiple-choice', stem: 'Where does the Walking Tour start?', options: ['Trafalgar Square', 'Westminster Pier', 'Buckingham Palace', 'Kensington Palace'], correctAnswer: 'Buckingham Palace', explanation: 'Paragraph Cmentions "Tours start at 10:00 am and 2:00 pm from outside Buckingham Palace"' },
      { number: 9, type: 'fill-blank', stem: 'Audio commentary on the bus tour is available in _______ languages.', options: undefined, correctAnswer: '8', explanation: 'Paragraph Amentions "Audio commentary is available in 8 languages"' },
      { number: 10, type: 'true-false-ng', stem: 'Children under 5 can travel free on the river cruise.', options: ['TRUE', 'FALSE', 'NOT GIVEN'], correctAnswer: 'NOT GIVEN', explanation: 'Paragraph Bchild pricing for the cruise is not mentioned' },
      { number: 11, type: 'fill-blank', stem: 'Group discounts for the river cruise are available for parties of _______ or more.', options: undefined, correctAnswer: '10', explanation: 'Paragraph Bmentions "Group discounts are available for parties of 10 or more"' },
      { number: 12, type: 'multiple-choice', stem: 'Which tour strongly recommends comfortable shoes?', options: ['Bus Tour', 'River Cruise', 'Walking Tour', 'All of them'], correctAnswer: 'Walking Tour', explanation: 'Paragraph Cmentions "Comfortable walking shoes are strongly recommended"' },
      { number: 13, type: 'fill-blank', stem: 'The Walking Tour costs £_______ per person.', options: undefined, correctAnswer: '12', explanation: 'Paragraph Cmentions "Cost: £12 per person"' },
      { number: 14, type: 'true-false-ng', stem: 'The bus tour has 35 designated stops throughout the city.', options: ['TRUE', 'FALSE', 'NOT GIVEN'], correctAnswer: 'TRUE', explanation: 'Paragraph Amentions "35 designated stops throughout the city"' }
    ],
    difficulty: 2
  },
  {
    category: 'reading',
    section: 2,
    part: 1,
    questionType: 'Workplace - Employee Handbook',
    passage: `
      <h3>SECTION 2: Questions 15-27</h3>
      <p><strong>Read the text below and answer Questions 15-20.</strong></p>

      <h4>Workplace Health and Safety Guidelines</h4>
      <p>All employees are required to familiarise themselves with the following health and safety procedures. Failure to comply may result in disciplinary action.</p>

      <p><strong>Fire Evacuation:</strong> Upon hearing the fire alarm, all staff must immediately evacuate the building using the nearest fire exit. Do not use the lifts. The assembly point is located in the car park at the rear of the building. Fire drills are conducted twice a year, typically in March and September. Attendance is mandatory and will be recorded by your line manager.</p>

      <p><strong>First Aid:</strong> First aid kits are located on each floor near the kitchen area. There are currently four qualified first aiders in the building: Sarah Chen (Floor 1), Mark Davies (Floor 2), Priya Patel (Floor 3), and James Wilson (Floor 4). In case of an emergency, contact the nearest first aider or dial 999 for an ambulance. All accidents, however minor, must be recorded in the Accident Report Book located at the main reception desk.</p>

      <p><strong>Display Screen Equipment:</strong> Employees who regularly use computers for more than one hour at a time are entitled to a free eye test every two years. If you require prescription glasses specifically for computer use, the company will contribute up to £80 towards the cost. Requests should be submitted to the Human Resources department using Form DSE-1.</p>

      <p><strong>Manual Handling:</strong> When lifting heavy objects, always bend your knees and keep your back straight. If an item weighs more than 25 kilograms, you must use the trolley provided or ask a colleague for assistance. Training in safe lifting techniques is provided during induction and refresher courses are available annually.</p>
    `,
    questions: [
      { number: 15, type: 'true-false-ng', stem: 'Employees may use the lifts during a fire evacuation if they are on higher floors.', options: ['TRUE', 'FALSE', 'NOT GIVEN'], correctAnswer: 'FALSE', explanation: 'clearly states "Do not use the lifts"，do not use lifts under any circumstances' },
      { number: 16, type: 'fill-blank', stem: 'Fire drills are conducted _______ a year.', options: undefined, correctAnswer: 'twice', explanation: 'mentions "Fire drills are conducted twice a year"' },
      { number: 17, type: 'multiple-choice', stem: 'How many qualified first aiders are currently in the building?', options: ['One', 'Two', 'Three', 'Four'], correctAnswer: 'Four', explanation: 'lists 4 first aiders: Sarah Chen, Mark Davies, Priya Patel, James Wilson' },
      { number: 18, type: 'fill-blank', stem: 'Employees are entitled to a free eye test every _______ years.', options: undefined, correctAnswer: 'two', explanation: 'mentions "a free eye test every two years"' },
      { number: 19, type: 'multiple-choice', stem: 'How much does the company contribute towards computer glasses?', options: ['£50', '£60', '£80', '£100'], correctAnswer: '£80', explanation: 'mentions "the company will contribute up to £80"' },
      { number: 20, type: 'fill-blank', stem: 'Items heavier than _______ kg require a trolley or assistance.', options: undefined, correctAnswer: '25', explanation: 'mentions "If an item weighs more than 25 kilograms"' },
      { number: 21, type: 'true-false-ng', stem: 'Fire drills take place in March and September.', options: ['TRUE', 'FALSE', 'NOT GIVEN'], correctAnswer: 'TRUE', explanation: 'clearly states "typically in March and September"' },
      { number: 22, type: 'fill-blank', stem: 'All accidents must be recorded in the _______ located at reception.', options: undefined, correctAnswer: 'Accident Report Book', explanation: 'mentions "Accident Report Book located at the main reception desk"' },
      { number: 23, type: 'multiple-choice', stem: 'Which form should be used to request an eye test?', options: ['HR-1', 'DSE-1', 'DSE-2', 'Form A'], correctAnswer: 'DSE-1', explanation: 'mentions "using Form DSE-1"' },
      { number: 24, type: 'true-false-ng', stem: 'Refresher courses in safe lifting are offered every six months.', options: ['TRUE', 'FALSE', 'NOT GIVEN'], correctAnswer: 'FALSE', explanation: 'states "refresher courses are available annually"(annually), not every six months' },
      { number: 25, type: 'fill-blank', stem: 'The first aider on Floor 3 is _______.', options: undefined, correctAnswer: 'Priya Patel', explanation: 'listed as "Priya Patel (Floor 3)"' },
      { number: 26, type: 'true-false-ng', stem: 'Employees must pay for their own eye tests if they do not use computers regularly.', options: ['TRUE', 'FALSE', 'NOT GIVEN'], correctAnswer: 'NOT GIVEN', explanation: 'only covers regular computer users; non-regular users are not addressed' },
      { number: 27, type: 'fill-blank', stem: 'The fire assembly point is in the _______ at the rear of the building.', options: undefined, correctAnswer: 'car park', explanation: 'mentions "The assembly point is located in the car park at the rear of the building"' }
    ],
    difficulty: 2
  },
  {
    category: 'reading',
    section: 3,
    part: 1,
    questionType: 'Long Passage - Sustainable Living',
    passage: `
      <h3>SECTION 3: Questions 28-40</h3>
      <p><strong>Read the text below and answer Questions 28-40.</strong></p>

      <h4>The Rise of Sustainable Living in Urban Communities</h4>

      <p><strong>A</strong> Over the past decade, a quiet revolution has been taking place in cities across the globe. From rooftop gardens in New York to community composting schemes in Tokyo, urban dwellers are increasingly embracing sustainable living practices. This shift is not merely a passing trend but represents a fundamental change in how people think about their relationship with the environment and their local communities.</p>

      <p><strong>B</strong> The drivers behind this movement are multifaceted. Climate change awareness has undoubtedly played a significant role, with extreme weather events and alarming scientific reports pushing environmental concerns to the forefront of public consciousness. At the same time, the rising cost of living in many urban centres has encouraged residents to seek more self-sufficient lifestyles. Growing one's own vegetables, for instance, can substantially reduce household food bills while also cutting down on the carbon emissions associated with transporting produce over long distances.</p>

      <p><strong>C</strong> Community gardens have emerged as one of the most visible symbols of this movement. A study conducted by the University of Brighton in 2019 found that there were over 3,000 community gardens in the United Kingdom alone, a figure that had more than doubled since 2010. These spaces serve multiple functions: they provide access to fresh, affordable produce; they create opportunities for social interaction among neighbours who might otherwise never meet; and they transform neglected urban spaces into green, productive landscapes. Research has shown that participants in community gardening projects report higher levels of life satisfaction and lower levels of stress compared to non-participants.</p>

      <p><strong>D</strong> The concept of the 'circular economy' has also gained traction in urban settings. Rather than following the traditional linear model of 'take, make, dispose', circular economy principles emphasise keeping resources in use for as long as possible. In practical terms, this manifests in initiatives such as repair cafés, where volunteers fix broken household items free of charge; tool libraries, where residents can borrow equipment rather than buying it; and clothing swaps, which reduce textile waste while refreshing participants' wardrobes at no cost. A report by the Ellen MacArthur Foundation estimates that adopting circular economy principles could reduce global carbon emissions by up to 45% by 2050.</p>

      <p><strong>E</strong> However, the transition to sustainable urban living is not without its challenges. Critics point out that many sustainable options remain more expensive than conventional alternatives, potentially excluding lower-income households. Organic food, electric vehicles, and energy-efficient appliances all tend to carry premium price tags. There is also the question of scale: while individual actions are commendable, meaningful environmental progress ultimately requires systemic changes at the governmental and corporate levels. As one environmental researcher noted, "Personal virtue signalling through reusable coffee cups will not save the planet if governments fail to regulate industrial emissions."</p>

      <p><strong>F</strong> Nevertheless, proponents argue that grassroots movements can create the social momentum necessary for broader policy changes. When enough citizens adopt sustainable practices, they not only reduce their own environmental footprint but also create a political constituency that demands action from elected officials. The rapid growth of the community energy sector in countries like Germany and Denmark, where citizen-owned renewable energy cooperatives now account for a significant share of electricity generation, demonstrates how local initiatives can scale up to achieve systemic impact.</p>

      <p><strong>G</strong> Looking ahead, the integration of technology with sustainable living offers promising possibilities. Smart home systems can optimise energy usage, reducing both bills and emissions. Apps that connect neighbours for food sharing or carpooling are making resource-sharing more convenient than ever. As cities continue to grow — the UN projects that 68% of the world's population will live in urban areas by 2050 — the importance of developing sustainable urban lifestyles will only increase. The question is not whether we can afford to embrace sustainable living, but whether we can afford not to.</p>
    `,
    questions: [
      { number: 28, type: 'matching', stem: 'Match: Statistics about the growth of community gardens in the UK.', options: ['Paragraph A', 'Paragraph B', 'Paragraph C', 'Paragraph D', 'Paragraph E', 'Paragraph F', 'Paragraph G'], correctAnswer: 'Paragraph C', explanation: 'Paragraph C cites a University of Brighton study with UK statistics' },
      { number: 29, type: 'matching', stem: 'Match: An argument that individual actions alone are insufficient without systemic change.', options: ['Paragraph A', 'Paragraph B', 'Paragraph C', 'Paragraph D', 'Paragraph E', 'Paragraph F', 'Paragraph G'], correctAnswer: 'Paragraph E', explanation: 'Paragraph E argues individual actions are insufficient without systemic change' },
      { number: 30, type: 'matching', stem: 'Match: Examples of how technology can support sustainable urban living.', options: ['Paragraph A', 'Paragraph B', 'Paragraph C', 'Paragraph D', 'Paragraph E', 'Paragraph F', 'Paragraph G'], correctAnswer: 'Paragraph G', explanation: 'Paragraph G describes how smart homes and sharing apps support sustainable living' },
      { number: 31, type: 'matching', stem: 'Match: An explanation of the circular economy and its practical applications.', options: ['Paragraph A', 'Paragraph B', 'Paragraph C', 'Paragraph D', 'Paragraph E', 'Paragraph F', 'Paragraph G'], correctAnswer: 'Paragraph D', explanation: 'Paragraph D explains the circular economy with examples like repair cafes and tool libraries' },
      { number: 32, type: 'multiple-choice', stem: 'According to the text, which is NOT mentioned as a benefit of community gardens?', options: ['Access to fresh produce', 'Social interaction', 'Increasing property values', 'Stress reduction'], correctAnswer: 'Increasing property values', explanation: 'C mentions fresh produce, social interaction, and stress reduction, but not property values' },
      { number: 33, type: 'fill-blank', stem: 'The number of community gardens in the UK had more than _______ since 2010.', options: undefined, correctAnswer: 'doubled', explanation: 'Paragraph Cmentions "had more than doubled since 2010"' },
      { number: 34, type: 'multiple-choice', stem: 'What does the Ellen MacArthur Foundation estimate about circular economy adoption?', options: ['It could create 1 million jobs', 'It could reduce emissions by up to 45% by 2050', 'It could save households £500 per year', 'It could halve food waste globally'], correctAnswer: 'It could reduce emissions by up to 45% by 2050', explanation: 'Paragraph Dmentions "could reduce global carbon emissions by up to 45% by 2050"' },
      { number: 35, type: 'true-false-ng', stem: 'Community gardens are more popular in the UK than in any other country.', options: ['TRUE', 'FALSE', 'NOT GIVEN'], correctAnswer: 'NOT GIVEN', explanation: 'only UK data is provided; no international comparison is made' },
      { number: 36, type: 'fill-blank', stem: 'According to the UN projection, _______ of the world\'s population will live in cities by 2050.', options: undefined, correctAnswer: '68%', explanation: 'Paragraph Gmentions "68% of the world\'s population will live in urban areas by 2050"' },
      { number: 37, type: 'multiple-choice', stem: 'Which countries are cited as examples of successful community-owned renewable energy?', options: ['UK and USA', 'Germany and Denmark', 'Japan and China', 'France and Italy'], correctAnswer: 'Germany and Denmark', explanation: 'Paragraph Fmentions "countries like Germany and Denmark"' },
      { number: 38, type: 'true-false-ng', stem: 'Organic food and electric vehicles remain more expensive than conventional alternatives.', options: ['TRUE', 'FALSE', 'NOT GIVEN'], correctAnswer: 'TRUE', explanation: 'Paragraph Eclearly states "Organic food, electric vehicles, and energy-efficient appliances all tend to carry premium price tags"' },
      { number: 39, type: 'true-false-ng', stem: 'The University of Brighton study was published in 2018.', options: ['TRUE', 'FALSE', 'NOT GIVEN'], correctAnswer: 'FALSE', explanation: 'Paragraph Cclearly states "A study conducted by the University of Brighton in 2019"' },
      { number: 40, type: 'multiple-choice', stem: 'What is the main conclusion of the passage?', options: ['Sustainable living is too expensive for most people', 'Individual actions are meaningless without government support', 'Sustainable urban living is growing and essential for the future', 'Technology will solve all environmental problems'], correctAnswer: 'Sustainable urban living is growing and essential for the future', explanation: 'the passage argues sustainable urban living is growing and essential for the future' }
    ],
    difficulty: 3
  },
  {
    category: 'reading', section: 1, part: 1, questionType: 'Short Ads - Community Services',
    passage: '<h4>Community Notice Board</h4><p><strong>A — Yoga Classes:</strong> Weekly yoga sessions every Tuesday 7-8pm at Community Centre. £8 per class, first session free. Mats provided. Contact Sarah: 07700 123456.</p><p><strong>B — Volunteer Drivers:</strong> Deliver meals to elderly residents. 2 hours/week minimum. Mileage paid. Full training given. Call Age Concern: 020 7946 0123.</p><p><strong>C — Book Club:</strong> Monthly book club last Thursday each month, 6:30pm at Library Café. This month: "The Remains of the Day". Free to join.</p>',
    questions: [
      { number: 1, type: 'multiple-choice', stem: 'How much is one yoga class?', options: ['Free', '£5', '£8', '£10'], correctAnswer: '£8', explanation: 'Paragraph Aclearly states "£8 per class"' },
      { number: 2, type: 'true-false-ng', stem: 'Yoga mats are provided.', options: ['TRUE','FALSE','NOT GIVEN'], correctAnswer: 'TRUE', explanation: 'Paragraph Amentions "Mats provided"' },
      { number: 3, type: 'fill-blank', stem: 'Book club meets on the last _______ of each month.', options: undefined, correctAnswer: 'Thursday', explanation: 'Paragraph Cmentions "last Thursday each month"' },
      { number: 4, type: 'multiple-choice', stem: 'Volunteer drivers serve:', options: ['Children', 'Elderly residents', 'Homeless people', 'Hospital patients'], correctAnswer: 'Elderly residents', explanation: 'Paragraph Bmentions "elderly residents"' },
      { number: 5, type: 'fill-blank', stem: 'Volunteer drivers need _______ hours/week minimum.', options: undefined, correctAnswer: '2', explanation: 'Paragraph Bmentions "2 hours/week minimum"' }
    ], difficulty: 1
  },
  {
    category: 'reading', section: 1, part: 1, questionType: 'Notice - Mall Holiday Hours',
    passage: '<h4>Westfield Shopping Centre — Holiday Hours</h4><p>Christmas Eve (24 Dec): 9am-6pm. Christmas Day (25 Dec): CLOSED. Boxing Day (26 Dec): 10am-7pm. New Year\'s Eve (31 Dec): 9am-5pm. New Year\'s Day (1 Jan): 11am-5pm. Normal hours (9am-9pm Mon-Sat, 11am-5pm Sun) resume from 2 January. Food court closes 30 minutes before the centre. Cinema maintains its own schedule — check website. Lost property: lostproperty@westfield.com.</p>',
    questions: [
      { number: 1, type: 'true-false-ng', stem: 'The centre is open on Christmas Day.', options: ['TRUE','FALSE','NOT GIVEN'], correctAnswer: 'FALSE', explanation: ' "Christmas Day: CLOSED"' },
      { number: 2, type: 'fill-blank', stem: 'Boxing Day closing time: _______pm.', options: undefined, correctAnswer: '7', explanation: ' "Boxing Day: 10am-7pm"' },
      { number: 3, type: 'fill-blank', stem: 'Food court closes _______ minutes before the centre.', options: undefined, correctAnswer: '30', explanation: 'clearly mentions 30 minutes' },
      { number: 4, type: 'true-false-ng', stem: 'The cinema follows the same holiday schedule.', options: ['TRUE','FALSE','NOT GIVEN'], correctAnswer: 'FALSE', explanation: 'cinema maintains its own schedule' },
      { number: 5, type: 'multiple-choice', stem: 'Normal hours resume on:', options: ['26 Dec', '1 Jan', '2 Jan', '3 Jan'], correctAnswer: '2 Jan', explanation: ' "resume from 2 January"' }
    ], difficulty: 1
  },
  {
    category: 'reading', section: 1, part: 1, questionType: 'Job Ads - Three Positions',
    passage: '<h4>Job Vacancies</h4><p><strong>A — Sales Assistant (Part-time):</strong> 16 hrs/week (Sat 9-5, Sun 10-4). £11.50/hr + staff discount. Training provided. Must be 18+. Apply: jobs@citystore.co.uk.</p><p><strong>B — Delivery Driver:</strong> Flexible schedule. Must have car/motorbike + clean licence. £12-15/hr including tips. Fuel allowance provided. Apply: quickbite.com/drivers.</p><p><strong>C — Care Assistant (Full-time):</strong> 37.5 hrs/week on rota. NVQ Level 2 required. £23,500/year + 28 days leave. Call 020 7123 4567 for application pack.</p>',
    questions: [
      { number: 1, type: 'fill-blank', stem: 'Sales Assistant hourly rate: £_______.', options: undefined, correctAnswer: '11.50', explanation: ' "£11.50/hr"' },
      { number: 2, type: 'fill-blank', stem: 'Care Assistant salary: £_______/year.', options: undefined, correctAnswer: '23,500', explanation: ' "£23,500/year"' },
      { number: 3, type: 'multiple-choice', stem: 'Which role requires a qualification?', options: ['Sales Assistant', 'Delivery Driver', 'Care Assistant', 'None'], correctAnswer: 'Care Assistant', explanation: 'Crequires NVQ Level 2' },
      { number: 4, type: 'true-false-ng', stem: 'Retail experience is essential for Position A.', options: ['TRUE','FALSE','NOT GIVEN'], correctAnswer: 'FALSE', explanation: ' "Training provided" indicates no experience required' },
      { number: 5, type: 'fill-blank', stem: 'Care Assistant leave: _______ days/year.', options: undefined, correctAnswer: '28', explanation: ' "28 days leave"' }
    ], difficulty: 1
  },
  {
    category: 'reading', section: 2, part: 1, questionType: 'Workplace - Training Policy',
    passage: '<h4>Staff Training Policy</h4><p>All new employees must complete induction training within 2 weeks. Induction covers: company policies, health & safety, GDPR, and equality & diversity. Each employee then agrees a Personal Development Plan (PDP) with their line manager, reviewed quarterly. Minimum 5 training days per year for courses, conferences, or online learning. Training reimbursement: 80% of fees up to £2,000/year (after 12 months\' service). Mandatory training fully reimbursed. Study leave: up to 3 days per exam, request via HR portal 4 weeks in advance.</p>',
    questions: [
      { number: 1, type: 'fill-blank', stem: 'Induction must be done within _______ weeks.', options: undefined, correctAnswer: '2', explanation: ' "within 2 weeks"' },
      { number: 2, type: 'true-false-ng', stem: 'GDPR is covered in induction.', options: ['TRUE','FALSE','NOT GIVEN'], correctAnswer: 'TRUE', explanation: 'inductionincludes GDPR' },
      { number: 3, type: 'fill-blank', stem: 'Minimum _______ training days per year.', options: undefined, correctAnswer: '5', explanation: ' "Minimum 5 training days"' },
      { number: 4, type: 'fill-blank', stem: 'Reimbursement cap: £_______/year.', options: undefined, correctAnswer: '2,000', explanation: ' "up to £2,000/year"' },
      { number: 5, type: 'multiple-choice', stem: 'PDP review frequency:', options: ['Weekly', 'Monthly', 'Quarterly', 'Annually'], correctAnswer: 'Quarterly', explanation: ' "reviewed quarterly"' }
    ], difficulty: 2
  },
  {
    category: 'reading', section: 2, part: 1, questionType: 'Workplace - Team Building',
    passage: '<h4>Team Building Event — 15 September</h4><p>Lakeside Activity Centre, 9:30am-4:30pm. Lunch provided. Three streams: <strong>A — Outdoor Challenges</strong> (raft building, orienteering, ropes course; max 24). <strong>B — Creative Workshop</strong> (art project, cooking challenge, improv games; max 20). <strong>C — Problem Solving</strong> (escape rooms, strategy games, business simulation; max 20). First-come first-served via intranet by 1 Sept. Bus from office 8:45am. Casual dress; trainers recommended for Stream A.</p>',
    questions: [
      { number: 1, type: 'multiple-choice', stem: 'Event date:', options: ['1 Sept', '15 Sept', '24 Sept', '30 Sept'], correctAnswer: '15 Sept', explanation: 'date is stated explicitly' },
      { number: 2, type: 'fill-blank', stem: 'Bus departs at _______am.', options: undefined, correctAnswer: '8:45', explanation: ' "8:45am"' },
      { number: 3, type: 'fill-blank', stem: 'Stream A max: _______ people.', options: undefined, correctAnswer: '24', explanation: ' "max 24"' },
      { number: 4, type: 'multiple-choice', stem: 'Which stream has no physical activity?', options: ['A', 'B', 'C', 'All have physical activity'], correctAnswer: 'C', explanation: 'Cinvolves cognitive tasks' },
      { number: 5, type: 'true-false-ng', stem: 'Lunch is provided.', options: ['TRUE','FALSE','NOT GIVEN'], correctAnswer: 'TRUE', explanation: ' "Lunch provided"' }
    ], difficulty: 2
  },
  {
    category: 'reading', section: 3, part: 1, questionType: 'Long Passage - Remote Work',
    passage: '<h4>The Remote Work Revolution</h4><p><strong>A</strong> COVID-19 triggered a massive shift to remote work. By 2023, 44% of UK workers worked from home at least part-time, up from just 12% pre-2020.</p><p><strong>B</strong> Benefits include higher job satisfaction, better work-life balance, reduced commuting costs, lower office overheads, and environmental gains from reduced travel.</p><p><strong>C</strong> Challenges include maintaining team cohesion, "proximity bias" favouring office-present staff, and mental health issues from isolation and blurred work-life boundaries.</p><p><strong>D</strong> The hybrid model (2-3 office days/week) is emerging as the consensus, balancing collaboration with flexibility.</p>',
    questions: [
      { number: 1, type: 'fill-blank', stem: 'Pre-2020 remote work rate: _______%.', options: undefined, correctAnswer: '12', explanation: 'A states12%' },
      { number: 2, type: 'matching', stem: 'Match: Drawbacks of remote work.', options: ['A','B','C','D'], correctAnswer: 'C', explanation: 'Paragraph Cdiscusses disadvantages' },
      { number: 3, type: 'fill-blank', stem: 'Hybrid model: _______ days/week in office.', options: undefined, correctAnswer: '2-3', explanation: 'D states' },
      { number: 4, type: 'true-false-ng', stem: 'Remote work increased air pollution.', options: ['TRUE','FALSE','NOT GIVEN'], correctAnswer: 'FALSE', explanation: 'Paragraph B says reduced pollution' },
      { number: 5, type: 'multiple-choice', stem: 'Main idea of paragraph D:', options: ['Remote work failed', 'Abandon offices', 'Hybrid is best balance', 'Office-only is better'], correctAnswer: 'Hybrid is best balance', explanation: 'Paragraph Dconcludes hybrid is best' }
    ], difficulty: 2
  },
  {
    category: 'reading', section: 3, part: 1, questionType: 'Long Passage - Plastic Crisis',
    passage: '<h4>The Plastic Crisis</h4><p><strong>A</strong> 400 million tonnes of plastic waste generated annually; only 9% recycled. 8 million tonnes enter oceans each year.</p><p><strong>B</strong> 700+ marine species affected. Microplastics (<5mm) found in ocean trenches, Arctic ice, and human food chain.</p><p><strong>C</strong> EU banned single-use plastics (2021). UK introduced £200/tonne packaging tax. 175 nations agreed UN plastic treaty (2022).</p><p><strong>D</strong> Critics say action is insufficient. Production growing 3-4%/year, projected to double by 2040. Dr Maria Santos: "We cannot recycle our way out — must produce less."</p>',
    questions: [
      { number: 1, type: 'fill-blank', stem: 'Global recycling rate: _______%.', options: undefined, correctAnswer: '9', explanation: 'A states' },
      { number: 2, type: 'fill-blank', stem: 'Microplastics defined as <_______mm.', options: undefined, correctAnswer: '5', explanation: 'B states' },
      { number: 3, type: 'fill-blank', stem: 'UK packaging tax: £_______/tonne.', options: undefined, correctAnswer: '200', explanation: 'C states' },
      { number: 4, type: 'true-false-ng', stem: 'Production to triple by 2040.', options: ['TRUE','FALSE','NOT GIVEN'], correctAnswer: 'FALSE', explanation: 'Paragraph Dsays double, not triple' },
      { number: 5, type: 'multiple-choice', stem: 'Dr Santos advocates:', options: ['More recycling', 'Produce less plastic', 'Better landfills', 'Ocean cleanup'], correctAnswer: 'Produce less plastic', explanation: 'Paragraph Dcited' }
    ], difficulty: 2
  },
  {
    category: 'reading', section: 1, part: 1, questionType: 'Notice - Community Events',
    passage: '<h4>Summer Festival Programme</h4><p><strong>Saturday 10 June:</strong> Outdoor cinema in the park, screening "The Greatest Showman" at 8:30pm. Bring blankets. Free entry. Food stalls from 6pm.</p><p><strong>Sunday 11 June:</strong> Charity fun run, 5km route through the town centre. Registration £10, starts 9am. All proceeds to the local hospice.</p><p><strong>Saturday 17 June:</strong> Craft market, 10am-4pm at Town Hall. Over 40 stalls selling handmade goods. Live music from local bands throughout the day.</p>',
    questions: [
      { number: 1, type: 'multiple-choice', stem: 'Film starts at:', options: ['6pm', '7pm', '8:30pm', '10am'], correctAnswer: '8:30pm', explanation: 'mentions "8:30pm"' },
      { number: 2, type: 'fill-blank', stem: 'Fun run registration: £_______.', options: undefined, correctAnswer: '10', explanation: ' "Registration £10"' },
      { number: 3, type: 'fill-blank', stem: 'Craft market has over _______ stalls.', options: undefined, correctAnswer: '40', explanation: ' "Over 40 stalls"' },
      { number: 4, type: 'multiple-choice', stem: 'Fun run distance:', options: ['3km', '5km', '10km', '15km'], correctAnswer: '5km', explanation: ' "5km route"' },
      { number: 5, type: 'true-false-ng', stem: 'The film screening requires tickets.', options: ['TRUE','FALSE','NOT GIVEN'], correctAnswer: 'FALSE', explanation: ' "Free entry"' }
    ], difficulty: 1
  },
  {
    category: 'reading', section: 2, part: 1, questionType: 'Workplace - Leave Policy',
    passage: '<h4>Employee Leave Policy</h4><p>Annual leave: 25 days per year plus bank holidays, increasing to 28 days after 5 years\' service. Leave requests must be submitted at least 2 weeks in advance via the HR portal. Maximum 10 consecutive working days without director approval. Sick leave: up to 5 days self-certified; doctor\'s note required from day 6. Maternity/paternity leave: 16 weeks full pay for mothers, 4 weeks for partners. Unpaid leave: up to 3 months may be granted for personal reasons at manager\'s discretion. Carry-over: up to 5 unused leave days may be carried into the next calendar year.</p>',
    questions: [
      { number: 1, type: 'fill-blank', stem: 'Standard annual leave: _______ days.', options: undefined, correctAnswer: '25', explanation: ' "25 days per year"' },
      { number: 2, type: 'fill-blank', stem: 'Leave after 5 years: _______ days.', options: undefined, correctAnswer: '28', explanation: ' "increasing to 28 days"' },
      { number: 3, type: 'multiple-choice', stem: 'Sick leave self-certification limit:', options: ['3 days', '5 days', '6 days', '10 days'], correctAnswer: '5 days', explanation: ' "up to 5 days self-certified"' },
      { number: 4, type: 'fill-blank', stem: 'Max _______ unused days can be carried over.', options: undefined, correctAnswer: '5', explanation: ' "up to 5 unused leave days"' },
      { number: 5, type: 'fill-blank', stem: 'Leave requests need _______ weeks\' notice.', options: undefined, correctAnswer: '2', explanation: ' "at least 2 weeks in advance"' }
    ], difficulty: 2
  },
  {
    category: 'reading', section: 3, part: 1, questionType: 'Long Passage - Sharing Economy',
    passage: '<h4>The Sharing Economy</h4><p><strong>A</strong> The sharing economy — where people rent or share assets rather than owning them — has grown from a niche concept to a global phenomenon worth over $300 billion. Platforms like Airbnb (accommodation) and Uber (transport) have become household names.</p><p><strong>B</strong> Proponents highlight efficiency and accessibility. Underutilised assets — spare rooms, idle cars — are put to productive use. Consumers enjoy lower costs and greater choice. For asset owners, it provides supplementary income.</p><p><strong>C</strong> Critics raise concerns about regulation and worker protections. Many platform workers are classified as independent contractors, lacking sick pay, holiday entitlement, and pension rights. Housing activists also argue that short-term rentals reduce the housing supply available to local residents.</p><p><strong>D</strong> The future of the sharing economy depends on developing regulatory frameworks that protect workers and communities while preserving the flexibility and innovation that make these platforms valuable.</p>',
    questions: [
      { number: 1, type: 'fill-blank', stem: 'Sharing economy worth: $_______ billion.', options: undefined, correctAnswer: '300', explanation: 'A states' },
      { number: 2, type: 'matching', stem: 'Match: Concerns about worker rights.', options: ['A','B','C','D'], correctAnswer: 'C', explanation: 'Paragraph Cdiscusses regulation and worker protections' },
      { number: 3, type: 'true-false-ng', stem: 'Platform workers usually get sick pay.', options: ['TRUE','FALSE','NOT GIVEN'], correctAnswer: 'FALSE', explanation: 'Paragraph C says they "lack sick pay"' },
      { number: 4, type: 'matching', stem: 'Match: Benefits for asset owners.', options: ['A','B','C','D'], correctAnswer: 'B', explanation: 'B statessupplementary income' },
      { number: 5, type: 'multiple-choice', stem: 'Main issue with short-term rentals:', options: ['Too expensive', 'Reduce housing for locals', 'Poor quality', 'Lack of parking'], correctAnswer: 'Reduce housing for locals', explanation: 'C statesreduce housing supply' }
    ], difficulty: 2
  }
]

// ============================================================
// LISTENING (4 sections, audioUrl placeholders)
// ============================================================

export const listeningSections: SeedQuestion[] = [
  {
    category: 'listening',
    section: 1,
    part: 1,
    questionType: 'Dialogue - Rental Enquiry',
    audioUrl: '',
    transcript: `
      Agent: Good morning, Green Valley Real Estate. How can I help you?
      Caller: Hi, I'm calling about the flat for rent on Oak Street. Is it still available?
      Agent: Let me check... Yes, the two-bedroom flat on 47 Oak Street is still available. The rent is £850 per month, not including bills.
      Caller: And does it come furnished?
      Agent: Yes, it's fully furnished. The kitchen has a fridge, oven, and washing machine. There's also a parking space included.
      Caller: That sounds good. Is it near public transport?
      Agent: Yes, the nearest tube station is Westbourne Park, about a 5-minute walk. There's also a bus stop right outside the building — the number 23 and 47 buses stop there.
      Caller: Great. And what about the deposit?
      Agent: The deposit is one month's rent, so £850. We also require references from your current employer and previous landlord.
      Caller: I can provide those. When can I arrange a viewing?
      Agent: How about this Thursday at 3:00 pm? Or Saturday morning at 10:30?
      Caller: Saturday at 10:30 works better for me.
      Agent: Perfect. Can I take your name and phone number?
      Caller: Yes, it's Emma Thompson, and my number is 07700 900 456.
      Agent: Thank you, Ms Thompson. I'll confirm the viewing by text message. You'll need to bring photo ID.
    `,
    questions: [
      { number: 1, type: 'fill-blank', stem: 'The flat is on _______ Oak Street.', options: undefined, correctAnswer: '47', explanation: 'Agent says "the two-bedroom flat on 47 Oak Street"' },
      { number: 2, type: 'fill-blank', stem: 'The monthly rent is £_______.', options: undefined, correctAnswer: '850', explanation: 'Agent says "The rent is £850 per month"' },
      { number: 3, type: 'multiple-choice', stem: 'The flat is:', options: ['Unfurnished', 'Partially furnished', 'Fully furnished', 'Not mentioned'], correctAnswer: 'Fully furnished', explanation: 'Agent says "Yes, it\'s fully furnished"' },
      { number: 4, type: 'fill-blank', stem: 'The nearest tube station is _______.', options: undefined, correctAnswer: 'Westbourne Park', explanation: 'Agent says "the nearest tube station is Westbourne Park"' },
      { number: 5, type: 'fill-blank', stem: 'The bus numbers stopping outside are 23 and _______.', options: undefined, correctAnswer: '47', explanation: 'Agent says "the number 23 and 47 buses stop there"' },
      { number: 6, type: 'fill-blank', stem: 'The deposit required is £_______.', options: undefined, correctAnswer: '850', explanation: 'Agent says "The deposit is one month\'s rent, so £850"' },
      { number: 7, type: 'multiple-choice', stem: 'The viewing is scheduled for:', options: ['Thursday at 3:00 pm', 'Saturday at 10:30 am', 'Thursday at 10:30 am', 'Saturday at 3:00 pm'], correctAnswer: 'Saturday at 10:30 am', explanation: 'Caller says "Saturday at 10:30 works better for me"' },
      { number: 8, type: 'fill-blank', stem: 'The caller\'s last name is _______.', options: undefined, correctAnswer: 'Thompson', explanation: 'Caller says "it\'s Emma Thompson"' },
      { number: 9, type: 'fill-blank', stem: 'The caller\'s phone number is _______.', options: undefined, correctAnswer: '07700 900 456', explanation: 'Caller provided the number "07700 900 456"' },
      { number: 10, type: 'fill-blank', stem: 'The caller needs to bring _______ to the viewing.', options: undefined, correctAnswer: 'photo ID', explanation: 'Agent says "You\'ll need to bring photo ID"' }
    ],
    difficulty: 1
  },
  {
    category: 'listening',
    section: 2,
    part: 1,
    questionType: 'Monologue - Museum Tour',
    audioUrl: '',
    transcript: `
      Guide: Good afternoon everyone and welcome to the City Museum. Before you begin your visit, I'd like to give you some important information.

      The museum is open Tuesday through Sunday from 9:30 am to 5:30 pm. We are closed on Mondays except on public holidays. Last admission is at 4:45 pm, 45 minutes before closing.

      The museum has four floors. The ground floor houses our Ancient Civilisations collection, including artefacts from Egypt, Greece, and Rome. This is our most popular gallery, so I recommend visiting it first thing in the morning to avoid the crowds. On the first floor, you'll find our Natural History section with an impressive dinosaur skeleton that is over 20 metres long. The second floor is dedicated to Modern Art from 1900 to the present day, and currently features a special exhibition on British Pop Art. The third floor has our café and rooftop terrace with views of the city — a perfect spot for a break.

      Guided tours are available at 11:00 am and 2:00 pm and last approximately 75 minutes. These are included in your admission ticket, but spaces are limited to 25 people per tour, so please sign up at the information desk at least 15 minutes before the tour starts.

      The museum shop is located next to the main entrance and offers a wide range of books, gifts, and replicas. Museum members receive a 15% discount on all purchases.

      Finally, please note that photography without flash is permitted in most galleries, but is not allowed in the special exhibition area on the second floor. Thank you and enjoy your visit.
    `,
    questions: [
      { number: 11, type: 'multiple-choice', stem: 'The museum is closed on:', options: ['Sundays', 'Mondays', 'Tuesdays', 'Public holidays'], correctAnswer: 'Mondays', explanation: 'Guide says "We are closed on Mondays except on public holidays"' },
      { number: 12, type: 'fill-blank', stem: 'The museum opens at _______ am.', options: undefined, correctAnswer: '9:30', explanation: 'Guide says "from 9:30 am to 5:30 pm"' },
      { number: 13, type: 'fill-blank', stem: 'Last admission is at _______ pm.', options: undefined, correctAnswer: '4:45', explanation: 'Guide says "Last admission is at 4:45 pm"' },
      { number: 14, type: 'multiple-choice', stem: 'The dinosaur skeleton is on which floor?', options: ['Ground floor', 'First floor', 'Second floor', 'Third floor'], correctAnswer: 'First floor', explanation: 'Guide says "On the first floor, you\'ll find our Natural History section with an impressive dinosaur skeleton"' },
      { number: 15, type: 'fill-blank', stem: 'The dinosaur skeleton is over _______ metres long.', options: undefined, correctAnswer: '20', explanation: 'Guide says "over 20 metres long"' },
      { number: 16, type: 'multiple-choice', stem: 'The special exhibition is about:', options: ['Ancient Egypt', 'British Pop Art', 'Modern Sculpture', 'Natural History'], correctAnswer: 'British Pop Art', explanation: 'Guide says "a special exhibition on British Pop Art"' },
      { number: 17, type: 'fill-blank', stem: 'Guided tours last approximately _______ minutes.', options: undefined, correctAnswer: '75', explanation: 'Guide says "last approximately 75 minutes"' },
      { number: 18, type: 'fill-blank', stem: 'Each guided tour is limited to _______ people.', options: undefined, correctAnswer: '25', explanation: 'Guide says "limited to 25 people per tour"' },
      { number: 19, type: 'fill-blank', stem: 'Museum members get a _______% discount in the shop.', options: undefined, correctAnswer: '15', explanation: 'Guide says "a 15% discount on all purchases"' },
      { number: 20, type: 'true-false-ng', stem: 'Flash photography is permitted in all galleries.', options: ['TRUE', 'FALSE', 'NOT GIVEN'], correctAnswer: 'FALSE', explanation: 'Guide says "photography without flash is permitted in most galleries"，but flash is restricted in some areas and banned in the special exhibition' }
    ],
    difficulty: 2
  },
  {
    category: 'listening',
    section: 3,
    part: 1,
    questionType: 'Dialogue - Student Discussion',
    audioUrl: '',
    transcript: `
      Tom: Hi Lisa, have you started the research for our Sociology presentation yet?
      Lisa: Yes, I've been reading quite a bit about urban migration patterns. It's actually really interesting — did you know that over 55% of the world's population now lives in cities?
      Tom: That's a lot. Our topic is about the causes of rural-to-urban migration in developing countries, right?
      Lisa: Exactly. I've identified three main factors: economic opportunities, better access to education, and climate change.
      Tom: Good. For the economic section, I found some statistics — average incomes in urban areas are about 3.2 times higher than in rural regions in most developing nations.
      Lisa: That's a useful figure. We should also mention that city jobs tend to be more diverse, not just in agriculture.
      Tom: Right. What about education?
      Lisa: Well, in many rural areas, the nearest secondary school can be over 15 kilometres away. University access is even more limited — only about 12% of rural students attend university compared to 34% in cities.
      Tom: Those are striking numbers. And the climate angle?
      Lisa: Climate change is increasingly driving migration. The UN estimates that by 2050, up to 200 million people could be displaced by climate-related factors like drought, flooding, and crop failures.
      Tom: We should break the presentation into clear sections. I'll cover the economic factors, you handle education and climate?
      Lisa: Sounds like a plan. The presentation needs to be 20 minutes long, and Dr. Roberts said we need at least 8 academic references.
      Tom: I already have four, so we need four more between us. Let's aim to finish the slides by Friday so we can rehearse.
      Lisa: Agreed. Let's meet Wednesday to check our progress.
    `,
    questions: [
      { number: 21, type: 'fill-blank', stem: 'Over _______% of the world\'s population lives in cities.', options: undefined, correctAnswer: '55', explanation: 'Lisastates "over 55% of the world\'s population now lives in cities"' },
      { number: 22, type: 'multiple-choice', stem: 'The presentation topic is about:', options: ['Urban unemployment', 'Rural-to-urban migration', 'International migration', 'Urban housing'], correctAnswer: 'Rural-to-urban migration', explanation: 'Tom confirms "rural-to-urban migration in developing countries"' },
      { number: 23, type: 'fill-blank', stem: 'Urban incomes are about _______ times higher than rural incomes.', options: undefined, correctAnswer: '3.2', explanation: 'Tomstates "average incomes in urban areas are about 3.2 times higher"' },
      { number: 24, type: 'fill-blank', stem: 'The nearest secondary school can be over _______ km away in rural areas.', options: undefined, correctAnswer: '15', explanation: 'Lisastates "the nearest secondary school can be over 15 kilometres away"' },
      { number: 25, type: 'multiple-choice', stem: 'What percentage of rural students attend university?', options: ['12%', '20%', '34%', '55%'], correctAnswer: '12%', explanation: 'Lisastates "only about 12% of rural students attend university"' },
      { number: 26, type: 'fill-blank', stem: 'The UN estimates up to _______ million people could be displaced by climate factors by 2050.', options: undefined, correctAnswer: '200', explanation: 'Lisastates "up to 200 million people could be displaced"' },
      { number: 27, type: 'multiple-choice', stem: 'The presentation should be how long?', options: ['10 minutes', '15 minutes', '20 minutes', '25 minutes'], correctAnswer: '20 minutes', explanation: 'Tomstates "The presentation needs to be 20 minutes long"' },
      { number: 28, type: 'fill-blank', stem: 'They need at least _______ academic references.', options: undefined, correctAnswer: '8', explanation: 'Tommentions "Dr. Roberts said we need at least 8 academic references"' },
      { number: 29, type: 'fill-blank', stem: 'Tom already has _______ references.', options: undefined, correctAnswer: 'four', explanation: 'Tomstates "I already have four"' },
      { number: 30, type: 'multiple-choice', stem: 'When do they plan to meet next?', options: ['Monday', 'Wednesday', 'Friday', 'Sunday'], correctAnswer: 'Wednesday', explanation: 'Lisastates "Let\'s meet Wednesday to check our progress"' }
    ],
    difficulty: 3
  },
  {
    category: 'listening',
    section: 4,
    part: 1,
    questionType: 'Lecture - Sleep Science',
    audioUrl: '',
    transcript: `
      Lecturer: Good morning. Today I'll be discussing recent research on sleep and its impact on cognitive function.

      Sleep is not simply a period of rest. During sleep, our brains are remarkably active, performing essential maintenance tasks. Research over the past twenty years has revolutionised our understanding of these processes.

      There are two main types of sleep: REM (Rapid Eye Movement) sleep and NREM (Non-Rapid Eye Movement) sleep. NREM sleep is further divided into three stages, with Stage 3 being the deepest and most restorative. A typical adult cycles through these stages 4 to 6 times per night, with each cycle lasting approximately 90 minutes.

      One of the most important discoveries in sleep science concerns memory consolidation. During deep sleep, the brain transfers information from the hippocampus — a temporary storage area — to the neocortex, where long-term memories are stored. This process, known as memory consolidation, is crucial for learning. Studies have shown that students who sleep for at least 7 hours after studying perform 20% to 40% better on memory tests compared to those who are sleep-deprived.

      Sleep also plays a vital role in emotional regulation. The amygdala, which processes emotions, becomes hyperactive when we are sleep-deprived — by as much as 60% according to one study. This explains why people tend to be more irritable and emotionally reactive after a poor night's sleep.

      Another critical function of sleep is the clearance of toxins from the brain. The glymphatic system, discovered only in 2012, becomes much more active during sleep, clearing away harmful proteins including beta-amyloid, which is associated with Alzheimer's disease. This may explain why chronic sleep deprivation is linked to an increased risk of neurodegenerative conditions.

      The recommended sleep duration for adults is 7 to 9 hours per night. However, surveys indicate that approximately 35% of adults in developed countries regularly sleep less than 7 hours. This sleep deficit has significant public health implications, including increased risks of cardiovascular disease, obesity, and depression.
    `,
    questions: [
      { number: 31, type: 'fill-blank', stem: 'A typical adult cycles through sleep stages _______ to 6 times per night.', options: undefined, correctAnswer: '4', explanation: 'Lecture mentions "cycles through these stages 4 to 6 times per night"' },
      { number: 32, type: 'fill-blank', stem: 'Each sleep cycle lasts approximately _______ minutes.', options: undefined, correctAnswer: '90', explanation: 'Lecture mentions "each cycle lasting approximately 90 minutes"' },
      { number: 33, type: 'multiple-choice', stem: 'Memory consolidation involves transfer of information from the hippocampus to the:', options: ['Amygdala', 'Neocortex', 'Cerebellum', 'Brain stem'], correctAnswer: 'Neocortex', explanation: 'Lecture mentions "transfers information from the hippocampus to the neocortex"' },
      { number: 34, type: 'fill-blank', stem: 'Students who sleep at least _______ hours after studying perform better on memory tests.', options: undefined, correctAnswer: '7', explanation: 'Lecture mentions "students who sleep for at least 7 hours after studying"' },
      { number: 35, type: 'multiple-choice', stem: 'Sleep-deprived students perform how much worse on memory tests?', options: ['10% to 20%', '20% to 40%', '40% to 60%', '60% to 80%'], correctAnswer: '20% to 40%', explanation: 'Lecture mentions "perform 20% to 40% better" — well-rested students performed 20-40% better' },
      { number: 36, type: 'fill-blank', stem: 'The amygdala can become up to _______% more active when sleep-deprived.', options: undefined, correctAnswer: '60', explanation: 'Lecture mentions "by as much as 60% according to one study"' },
      { number: 37, type: 'fill-blank', stem: 'The glymphatic system was discovered in _______.', options: undefined, correctAnswer: '2012', explanation: 'Lecture mentions "The glymphatic system, discovered only in 2012"' },
      { number: 38, type: 'multiple-choice', stem: 'Which harmful protein does the glymphatic system clear?', options: ['Insulin', 'Beta-amyloid', 'Hemoglobin', 'Collagen'], correctAnswer: 'Beta-amyloid', explanation: 'Lecture mentions "clearing away harmful proteins including beta-amyloid"' },
      { number: 39, type: 'fill-blank', stem: 'Approximately _______% of adults in developed countries sleep less than 7 hours.', options: undefined, correctAnswer: '35', explanation: 'Lecture mentions "approximately 35% of adults in developed countries regularly sleep less than 7 hours"' },
      { number: 40, type: 'multiple-choice', stem: 'Which is NOT mentioned as a health risk of sleep deprivation?', options: ['Cardiovascular disease', 'Obesity', 'Depression', 'Diabetes'], correctAnswer: 'Diabetes', explanation: 'Lecture mentions cardiovascular disease, obesity, depression, but not diabetes' }
    ],
    difficulty: 3
  },
  {
    category: 'listening', section: 1, part: 1, questionType: 'Dialogue - Travel Booking',
    audioUrl: '', transcript: 'Agent: Sunrise Travel, how may I help?\nCaller: I\'d like to book a weekend trip to Edinburgh, leaving Friday 14th and returning Sunday 16th.\nAgent: Certainly. Would you prefer train or flight?\nCaller: Train, please. There are two of us.\nAgent: The 8:15am from King\'s Cross arrives Edinburgh at 12:45pm. Return at 4:30pm Sunday. That\'s £186 per person return.\nCaller: Can we do first class?\nAgent: Yes, that\'s £245 each. Includes meal service.\nCaller: Fine. Also, can you recommend a hotel?\nAgent: The Royal Mile Hotel is popular, £110/night including breakfast.\nCaller: Book it, please. Name: James Harrison. Card: 4532 7891 2345 6789.\nAgent: Confirmed. Reference: SR7842.',
    questions: [
      { number: 1, type: 'fill-blank', stem: 'Departure date: Friday _______ (month).', options: undefined, correctAnswer: '14th', explanation: 'Caller says "leaving Friday 14th"' },
      { number: 2, type: 'fill-blank', stem: 'Train departs at _______am.', options: undefined, correctAnswer: '8:15', explanation: 'Agent says "8:15am from King\'s Cross"' },
      { number: 3, type: 'multiple-choice', stem: 'Return day:', options: ['Friday', 'Saturday', 'Sunday', 'Monday'], correctAnswer: 'Sunday', explanation: 'Agent says "Return at 4:30pm Sunday"' },
      { number: 4, type: 'fill-blank', stem: 'First class fare: £_______ per person.', options: undefined, correctAnswer: '245', explanation: 'Agent says "£245 each"' },
      { number: 5, type: 'fill-blank', stem: 'Hotel price: £_______/night.', options: undefined, correctAnswer: '110', explanation: 'Agentmentions "£110/night including breakfast"' },
      { number: 6, type: 'fill-blank', stem: 'Booking reference: _______.', options: undefined, correctAnswer: 'SR7842', explanation: 'Agent finally states "Reference: SR7842"' }
    ], difficulty: 1
  },
  {
    category: 'listening', section: 2, part: 1, questionType: 'Monologue - Library Services',
    audioUrl: '', transcript: 'Welcome to Central Library. Our opening hours: Mon-Fri 9am-8pm, Sat 10am-5pm, Sun 12pm-4pm. Membership is free for residents — bring proof of address and photo ID. Borrow up to 12 items for 3 weeks, renewable online. Late returns: £0.25 per item per day. Computers on the ground floor — book in advance, 1-hour slots. Printing: £0.10/page B&W, £0.50 colour. Study rooms on first floor can be booked for 2-hour sessions. Children\'s story time every Saturday 11am. The library café is open until 30 minutes before closing.',
    questions: [
      { number: 1, type: 'fill-blank', stem: 'Saturday hours: _______am-5pm.', options: undefined, correctAnswer: '10', explanation: ' "Sat 10am-5pm"' },
      { number: 2, type: 'multiple-choice', stem: 'Maximum items borrowable:', options: ['6', '8', '12', '15'], correctAnswer: '12', explanation: ' "up to 12 items"' },
      { number: 3, type: 'fill-blank', stem: 'Loan period: _______ weeks.', options: undefined, correctAnswer: '3', explanation: ' "for 3 weeks"' },
      { number: 4, type: 'fill-blank', stem: 'Late fee: £_______ per item/day.', options: undefined, correctAnswer: '0.25', explanation: ' "£0.25 per item per day"' },
      { number: 5, type: 'multiple-choice', stem: 'Colour printing cost:', options: ['£0.10', '£0.25', '£0.50', '£1.00'], correctAnswer: '£0.50', explanation: ' "£0.50 colour"' },
      { number: 6, type: 'fill-blank', stem: 'Study room booking: _______ hours max.', options: undefined, correctAnswer: '2', explanation: ' "2-hour sessions"' }
    ], difficulty: 1
  },
  {
    category: 'listening', section: 3, part: 1, questionType: 'Dialogue - Course Enquiry',
    audioUrl: '', transcript: 'Student: I\'m interested in the part-time Business Management course.\nAdvisor: The course runs 18 weeks, every Tuesday and Thursday 6:30-9pm. Entry requirements: GCSE Maths and English at grade C or above, plus 2 years\' work experience.\nStudent: I have those. What about fees?\nAdvisor: £1,450 for the full course, payable in 3 instalments. First instalment of £500 due at registration.\nStudent: And assessments?\nAdvisor: 4 written assignments (2,000 words each) plus a final project worth 50% of the grade. The project is a business plan due by 15 May.\nStudent: Is there career support afterwards?\nAdvisor: Yes, CV workshops and 1-to-1 career coaching included. 85% of graduates find employment within 6 months.',
    questions: [
      { number: 1, type: 'fill-blank', stem: 'Course duration: _______ weeks.', options: undefined, correctAnswer: '18', explanation: 'Advisor says "The course runs 18 weeks"' },
      { number: 2, type: 'multiple-choice', stem: 'Class days:', options: ['Mon & Wed', 'Tue & Thu', 'Wed & Fri', 'Mon & Fri'], correctAnswer: 'Tue & Thu', explanation: 'Advisor says "Tuesday and Thursday"' },
      { number: 3, type: 'fill-blank', stem: 'Total course fee: £_______.', options: undefined, correctAnswer: '1,450', explanation: 'Advisor says "£1,450 for the full course"' },
      { number: 4, type: 'fill-blank', stem: 'First instalment: £_______.', options: undefined, correctAnswer: '500', explanation: 'Advisor says "£500 due at registration"' },
      { number: 5, type: 'fill-blank', stem: 'Final project deadline: _______ May.', options: undefined, correctAnswer: '15', explanation: 'Advisor says "due by 15 May"' },
      { number: 6, type: 'multiple-choice', stem: 'Employment rate within 6 months:', options: ['75%', '80%', '85%', '90%'], correctAnswer: '85%', explanation: 'Advisor says "85% of graduates find employment"' }
    ], difficulty: 2
  },
  {
    category: 'listening', section: 4, part: 1, questionType: 'Lecture - Climate Lecture - Climate & Agriculture Agriculture',
    audioUrl: '', transcript: 'Today\'s lecture examines climate change impacts on global agriculture. Average global temperatures have risen 1.1°C since pre-industrial times. Crop yields for wheat and maize have declined 5-6% per degree of warming. By 2050, an estimated 30% of current agricultural land may become unsuitable for farming due to drought and desertification. However, adaptation strategies exist: drought-resistant crop varieties, improved irrigation, and shifting planting dates. The UN Food and Agriculture Organization estimates that investing $8 billion annually in climate-smart agriculture could reduce the number of people facing hunger by 150 million by 2030.',
    questions: [
      { number: 1, type: 'fill-blank', stem: 'Temperature rise: _______°C since pre-industrial era.', options: undefined, correctAnswer: '1.1', explanation: 'Lecture mentions "risen 1.1°C"' },
      { number: 2, type: 'fill-blank', stem: 'Crop yield decline: _______% per degree of warming.', options: undefined, correctAnswer: '5-6', explanation: 'Lecture mentions "declined 5-6%"' },
      { number: 3, type: 'multiple-choice', stem: 'By 2050, what percentage of land may be unsuitable?', options: ['10%', '20%', '30%', '40%'], correctAnswer: '30%', explanation: 'Lecture mentions "30% of current agricultural land"' },
      { number: 4, type: 'fill-blank', stem: 'UN suggests investing $_______ billion/year in climate-smart agriculture.', options: undefined, correctAnswer: '8', explanation: 'Lecture mentions "$8 billion annually"' },
      { number: 5, type: 'fill-blank', stem: 'Could reduce hunger for _______ million people by 2030.', options: undefined, correctAnswer: '150', explanation: 'Lecture mentions "150 million by 2030"' }
    ], difficulty: 3
  },
  {
    category: 'listening', section: 1, part: 1, questionType: 'Dialogue - Restaurant Booking',
    audioUrl: '', transcript: 'Host: Bella Italia, how can I help?\nCaller: I\'d like to book a table for Saturday evening. Six people, at 7:30pm.\nHost: Let me check... We have a table at 7:30 or 8:15pm.\nCaller: 7:30 is perfect.\nHost: Indoor or terrace?\nCaller: Terrace, please, weather permitting.\nHost: Can I take a name? Caller: Williams. Phone: 0798 456 1234.\nHost: Any dietary requirements? Caller: One vegetarian, no allergies.\nHost: Noted. We hold tables for 15 minutes. A £50 deposit is required for groups of 6+. I\'ll send a payment link.',
    questions: [
      { number: 1, type: 'fill-blank', stem: 'Number of guests: _______.', options: undefined, correctAnswer: '6', explanation: 'Caller says "Six people"' },
      { number: 2, type: 'multiple-choice', stem: 'Time chosen:', options: ['7:00pm', '7:30pm', '8:00pm', '8:15pm'], correctAnswer: '7:30pm', explanation: 'Caller says "7:30 is perfect"' },
      { number: 3, type: 'fill-blank', stem: 'Customer name: _______.', options: undefined, correctAnswer: 'Williams', explanation: 'Caller provided their name' },
      { number: 4, type: 'fill-blank', stem: 'Deposit required: £_______.', options: undefined, correctAnswer: '50', explanation: 'Host says "£50 deposit"' },
      { number: 5, type: 'multiple-choice', stem: 'Dietary requirement:', options: ['Gluten-free', 'Vegetarian', 'Vegan', 'Nut allergy'], correctAnswer: 'Vegetarian', explanation: 'Caller says "One vegetarian"' }
    ], difficulty: 1
  },
  {
    category: 'listening', section: 2, part: 1, questionType: 'Monologue - Gym Membership',
    audioUrl: '', transcript: 'Welcome to FitLife Gym. Our membership options: Basic at £29.99/month gives gym floor access during off-peak hours (6am-4pm weekdays, all day weekends). Standard at £45/month includes peak access plus 2 group classes/week. Premium at £65/month includes unlimited classes, pool and sauna, plus 2 free personal training sessions. All memberships: £25 joining fee, minimum 3-month contract. Students and over-60s get 15% discount. Opening hours: Mon-Fri 6am-10pm, weekends 7am-8pm. Free parking for up to 2 hours. Classes include yoga, spin, HIIT, and Pilates. Book via the FitLife app.',
    questions: [
      { number: 1, type: 'fill-blank', stem: 'Basic membership: £_______/month.', options: undefined, correctAnswer: '29.99', explanation: 'as mentioned in the text' },
      { number: 2, type: 'fill-blank', stem: 'Joining fee: £_______.', options: undefined, correctAnswer: '25', explanation: ' "$25 joining fee"' },
      { number: 3, type: 'multiple-choice', stem: 'Minimum contract:', options: ['1 month', '3 months', '6 months', '12 months'], correctAnswer: '3 months', explanation: ' "minimum 3-month contract"' },
      { number: 4, type: 'fill-blank', stem: 'Student discount: _______%.', options: undefined, correctAnswer: '15', explanation: ' "15% discount"' },
      { number: 5, type: 'multiple-choice', stem: 'Premium includes how many free PT sessions?', options: ['1', '2', '3', 'Unlimited'], correctAnswer: '2', explanation: ' "2 free personal training sessions"' }
    ], difficulty: 1
  },
  {
    category: 'listening', section: 3, part: 1, questionType: 'Dialogue - Internship Interview',
    audioUrl: '', transcript: 'Interviewer: Tell me about your relevant experience.\nCandidate: I completed a 3-month internship at GreenTech last summer, working on their renewable energy project.\nInterviewer: What skills did you develop?\nCandidate: Data analysis using Excel and Python, and I led a small team of 3 on a market research task.\nInterviewer: Why our company?\nCandidate: Your sustainability focus aligns with my values. I read your recent report on carbon reduction targets — very impressive.\nInterviewer: The role requires occasional travel — up to 20% of the time. Is that okay?\nCandidate: Absolutely. I have a full driving licence and am happy to travel. Do you have a graduate training programme?\nInterviewer: Yes, a 12-month scheme with rotations across 4 departments.',
    questions: [
      { number: 1, type: 'fill-blank', stem: 'Internship duration: _______ months.', options: undefined, correctAnswer: '3', explanation: 'Candidate says "3-month internship"' },
      { number: 2, type: 'fill-blank', stem: 'Team size for market research: _______.', options: undefined, correctAnswer: '3', explanation: 'Candidate says "team of 3"' },
      { number: 3, type: 'fill-blank', stem: 'Travel required: up to _______% of time.', options: undefined, correctAnswer: '20', explanation: 'Interviewer says "up to 20%"' },
      { number: 4, type: 'multiple-choice', stem: 'Training scheme duration:', options: ['6 months', '12 months', '18 months', '24 months'], correctAnswer: '12 months', explanation: 'Interviewer says "12-month scheme"' },
      { number: 5, type: 'fill-blank', stem: 'Number of department rotations: _______.', options: undefined, correctAnswer: '4', explanation: 'Interviewer says "across 4 departments"' }
    ], difficulty: 2
  },
  {
    category: 'listening', section: 4, part: 1, questionType: 'Lecture - AI Ethics',
    audioUrl: '', transcript: 'Today we examine the ethical implications of artificial intelligence. Three key concerns dominate the debate. First, algorithmic bias: AI systems trained on historical data can perpetuate existing discrimination. A 2019 study found facial recognition systems were 10-34% less accurate for darker-skinned women. Second, job displacement: the World Economic Forum estimates AI will replace 85 million jobs by 2025 while creating 97 million new ones — a net gain but significant disruption. Third, privacy: AI\'s ability to analyse vast datasets raises concerns about surveillance and consent. The EU\'s AI Act, passed in 2023, categorises AI applications by risk level and bans those deemed unacceptable, such as social scoring systems.',
    questions: [
      { number: 1, type: 'fill-blank', stem: 'Facial recognition less accurate for darker-skinned women by _______%.', options: undefined, correctAnswer: '10-34', explanation: 'Lecture mentions "10-34% less accurate"' },
      { number: 2, type: 'fill-blank', stem: 'AI to displace _______ million jobs by 2025.', options: undefined, correctAnswer: '85', explanation: 'Lecture mentions "replace 85 million jobs"' },
      { number: 3, type: 'fill-blank', stem: 'AI to create _______ million new jobs by 2025.', options: undefined, correctAnswer: '97', explanation: 'Lecture mentions "creating 97 million new ones"' },
      { number: 4, type: 'multiple-choice', stem: 'EU AI Act passed in:', options: ['2021', '2022', '2023', '2024'], correctAnswer: '2023', explanation: 'Lecture mentions "passed in 2023"' },
      { number: 5, type: 'multiple-choice', stem: 'What does the AI Act ban?', options: ['All AI', 'Social scoring', 'Facial recognition', 'Automation'], correctAnswer: 'Social scoring', explanation: 'Lecture mentions "bans...social scoring systems"' }
    ], difficulty: 3
  }
]

// ============================================================
// WRITING
// ============================================================

export const writingTasks: SeedQuestion[] = [
  {
    category: 'writing',
    section: 0,
    part: 1,
    questionType: 'Task 1 - Formal Letter',
    writingPrompt: `
      You recently stayed at a hotel and were dissatisfied with the service you received.

      Write a letter to the hotel manager. In your letter:
      - describe the problems you experienced
      - explain how these problems affected your stay
      - suggest what you would like the manager to do

      Write at least 150 words. You do NOT need to write any addresses.
    `,
    questions: [],
    sampleAnswer: `
Dear Sir or Madam,

I am writing to express my dissatisfaction with the service I received during my recent stay at your hotel from 15th to 18th July.

Firstly, upon arrival, I discovered that the room I had booked — a non-smoking double room with a sea view — was not available. Instead, I was given a smaller room facing the car park, which was both noisy and lacked the promised view. Furthermore, the air conditioning in this room was not functioning properly, making the room uncomfortably warm during the night.

Secondly, I found the cleanliness of the bathroom to be below acceptable standards. There were stains on the shower curtain, and the towels provided appeared to have been used previously.

These issues significantly affected my stay. I was unable to sleep well due to the noise and heat, and I felt that the overall experience did not reflect the four-star rating advertised on your website.

I would appreciate it if you could offer a partial refund for my stay, as I did not receive the standard of accommodation I paid for. I look forward to hearing from you regarding this matter.

Yours faithfully,
[Name]
    `.trim(),
    difficulty: 2
  },
  {
    category: 'writing',
    section: 0,
    part: 2,
    questionType: 'Task 2 - Opinion Essay',
    writingPrompt: `
      Some people believe that governments should invest more money in public transportation systems, while others think that improving road infrastructure for private vehicles is more important.

      Discuss both views and give your own opinion.

      Give reasons for your answer and include any relevant examples from your own knowledge or experience.
      Write at least 250 words.
    `,
    questions: [],
    sampleAnswer: `
The allocation of government funding for transportation infrastructure is a topic of considerable debate. While some argue that investment should prioritise public transport, others contend that improving roads for private vehicles is more crucial. This essay will discuss both perspectives before presenting my own view.

On the one hand, those who advocate for investment in public transportation highlight its environmental and social benefits. Efficient bus, train, and metro systems can significantly reduce carbon emissions by encouraging people to leave their cars at home. For example, cities such as London and Tokyo have demonstrated that well-funded public transport networks can decrease traffic congestion and improve air quality. Additionally, public transport is more equitable, as it provides mobility for those who cannot afford private vehicles, including students, the elderly, and low-income families.

On the other hand, proponents of road infrastructure investment argue that private vehicles remain essential for many people, particularly those living in rural or suburban areas where public transport is less viable. In such areas, well-maintained roads are critical for commuting to work, accessing healthcare, and transporting goods. Moreover, with the rise of electric vehicles, the environmental argument against road investment may become less compelling over time.

In my opinion, while both types of investment are necessary, governments should prioritise public transportation for several reasons. Firstly, the environmental challenges we face require collective action, and efficient public transport is one of the most effective ways to reduce per-capita emissions. Secondly, as urban populations continue to grow, relying primarily on private vehicles will lead to unsustainable levels of congestion. That said, a balanced approach that maintains existing road infrastructure while expanding public transport networks is likely to be the most pragmatic solution.

In conclusion, although road infrastructure remains important, I believe that greater emphasis should be placed on developing public transportation systems to address environmental concerns and ensure equitable access to mobility for all citizens.
    `.trim(),
    difficulty: 3
  },
  {
    category: 'writing', section: 0, part: 1, questionType: 'Task 1 - Informal Letter',
    writingPrompt: 'A friend has invited you to a party but you cannot attend. Write a letter to your friend. In your letter:\n- thank them for the invitation\n- explain why you cannot come\n- suggest meeting at another time',
    questions: [], sampleAnswer: 'Dear Alex,\n\nThank you so much for inviting me to your birthday party this Saturday. I was really looking forward to celebrating with you.\n\nUnfortunately, I won\'t be able to make it as I have a work commitment that weekend. My company is hosting a client event that I simply cannot get out of.\n\nI\'d love to take you out for dinner the following week instead — maybe Friday evening? Let me know what works for you.\n\nHope you have a fantastic party!\n\nBest wishes,\n[Name]',
    difficulty: 1
  },
  {
    category: 'writing', section: 0, part: 1, questionType: 'Task 1 - Semi-formal Letter',
    writingPrompt: 'You recently attended a job interview but later decided not to accept the position. Write a letter to the interviewer. In your letter:\n- thank them for the opportunity\n- explain why you are declining the offer\n- wish them well for the future',
    questions: [], sampleAnswer: 'Dear Ms. Johnson,\n\nI am writing to thank you sincerely for offering me the position of Marketing Assistant at ABC Corporation.\n\nAfter careful consideration, I have decided to decline the offer as I have accepted another role that is more closely aligned with my long-term career goals in digital marketing.\n\nI greatly appreciated the time you took to interview me and was very impressed by your team. I wish you and ABC Corporation continued success.\n\nThank you again for this opportunity.\n\nYours sincerely,\n[Name]',
    difficulty: 2
  },
  {
    category: 'writing', section: 0, part: 2, questionType: 'Task 2 - Education & Employment',
    writingPrompt: 'Some people believe that universities should focus on providing students with practical skills for the workplace. Others think universities should focus on academic knowledge and theory. Discuss both views and give your opinion.',
    questions: [], sampleAnswer: 'The purpose of university education has long been debated. This essay will discuss both perspectives on whether higher education should prioritise practical skills or academic knowledge.\n\nSupporters of practical education argue that universities must prepare students for the reality of the job market. In a competitive economy, graduates need immediately applicable skills such as data analysis, project management, and technical proficiency. Moreover, employers increasingly complain that graduates lack workplace readiness, suggesting a gap between academia and industry.\n\nOn the other hand, advocates of academic knowledge contend that universities exist to cultivate critical thinking and intellectual depth, not merely to serve as vocational training centres. Theoretical understanding provides the foundation from which practical applications are derived. Furthermore, the skills acquired through rigorous academic study — such as research methodology, logical reasoning, and the ability to synthesise complex information — are transferable across many careers.\n\nIn my view, the ideal university education should integrate both approaches. Practical skills make graduates employable; academic knowledge makes them adaptable and innovative. The most successful graduates are those who can bridge theory and practice.',
    difficulty: 3
  },
  {
    category: 'writing', section: 0, part: 2, questionType: 'Task 2 - Technology & Social Media',
    writingPrompt: 'Social media has made it easier for people to stay connected, but some argue it has made relationships less meaningful. To what extent do you agree or disagree?',
    questions: [], sampleAnswer: 'Social media has fundamentally changed how we maintain relationships. While it offers unprecedented connectivity, I largely agree that the quality of relationships has suffered.\n\nOn one hand, platforms like Facebook and WeChat enable us to stay in touch with friends and family across vast distances. Important life events — births, graduations, achievements — can be shared instantly, maintaining a sense of connection that would have been impossible in previous generations.\n\nHowever, these connections often remain superficial. A "like" or brief comment requires minimal effort and cannot substitute for a genuine conversation. Research suggests that the average social media user has hundreds of online "friends" but may have fewer close confidants than people did thirty years ago. The curated nature of social media also encourages comparison rather than authentic sharing.\n\nIn conclusion, while social media facilitates convenient connection, I believe the depth and authenticity of relationships have diminished. Meaningful relationships require time, vulnerability, and presence — qualities that social media interactions too often bypass.',
    difficulty: 3
  },
  {
    category: 'writing', section: 0, part: 2, questionType: 'Task 2 - Health & Lifestyle',
    writingPrompt: 'In many countries, people are living longer than ever before. Some say an ageing population creates problems for governments. Others believe there are benefits if older people continue to contribute to society. Discuss both views and give your opinion.',
    questions: [], sampleAnswer: 'Increased life expectancy is one of humanity\'s greatest achievements, but it brings both challenges and opportunities for societies worldwide.\n\nOn the challenge side, an ageing population places significant strain on public services. Healthcare costs rise dramatically as older people typically require more medical attention. Pension systems, designed when life expectancy was much lower, face sustainability issues. In Japan, where over 28% of the population is over 65, these pressures are already evident.\n\nHowever, older people contribute immensely to society in ways that are often undervalued. Many provide free childcare for grandchildren, enabling parents to work. Their professional experience and institutional knowledge are irreplaceable — many organisations lose critical expertise when senior staff retire. Furthermore, older volunteers are the backbone of many charities and community organisations.\n\nIn my opinion, governments should reframe the debate from "the burden of ageing" to "the opportunity of longevity." Policies that support flexible retirement, lifelong learning, and age-friendly workplaces can help societies harness the contributions of older citizens while managing the genuine fiscal challenges.',
    difficulty: 3
  }
]

// ============================================================
// SPEAKING
// ============================================================

export const speakingParts: SeedQuestion[] = [
  {
    category: 'speaking',
    section: 0,
    part: 1,
    questionType: 'Home & Accommodation',
    questions: [
      { number: 1, type: 'short-answer', stem: 'Do you live in a house or a flat?', options: undefined, correctAnswer: '', explanation: 'Open-ended question - no standard answer. Describe your home type, location, and features' },
      { number: 2, type: 'short-answer', stem: 'What is your favourite room in your home?', options: undefined, correctAnswer: '', explanation: 'Open-ended question. Describe your favourite room and why' },
      { number: 3, type: 'short-answer', stem: 'Is there anything you would like to change about your home?', options: undefined, correctAnswer: '', explanation: 'Open-ended question. Describe what you would change and why' },
      { number: 4, type: 'short-answer', stem: 'Do you often invite friends to your home?', options: undefined, correctAnswer: '', explanation: 'Open-ended question. Mention frequency, activities, and reasons' }
    ],
    sampleAnswer: `
Sample high-score response for Q1: "I currently live in a two-bedroom flat on the outskirts of the city. It's on the third floor of a modern apartment building. I chose it mainly because it's close to my workplace and the rent is quite reasonable. The flat itself is bright and spacious, with large windows that let in plenty of natural light."

Key vocabulary: outskirts, apartment building, reasonable rent, spacious, natural light
    `.trim(),
    difficulty: 1
  },
  {
    category: 'speaking',
    section: 0,
    part: 1,
    questionType: 'Work & Studies',
    questions: [
      { number: 1, type: 'short-answer', stem: 'Do you work or are you a student?', options: undefined, correctAnswer: '', explanation: 'Open-ended question. Describe your work or study situation' },
      { number: 2, type: 'short-answer', stem: 'Why did you choose this job / course?', options: undefined, correctAnswer: '', explanation: 'Open-ended question. Explain your choice, interests, or career plans' },
      { number: 3, type: 'short-answer', stem: 'What do you enjoy most about your work or studies?', options: undefined, correctAnswer: '', explanation: 'Open-ended question. Describe what you enjoy most and why' },
      { number: 4, type: 'short-answer', stem: 'What would you like to do in the future?', options: undefined, correctAnswer: '', explanation: 'Open-ended question. Describe future career or study goals' }
    ],
    sampleAnswer: `
Sample high-score response for Q1: "I'm currently working as a software developer at a tech company in Beijing. I've been in this role for about three years now. I chose this career path because I've always been fascinated by how technology can solve real-world problems. What I enjoy most is the creative aspect of coding — it's like solving puzzles every day. In the future, I'd like to move into a leadership role and eventually start my own tech company."

Key vocabulary: software developer, fascinated by, solve real-world problems, creative aspect, leadership role
    `.trim(),
    difficulty: 1
  },
  {
    category: 'speaking',
    section: 0,
    part: 1,
    questionType: 'Hobbies & Free Time',
    questions: [
      { number: 1, type: 'short-answer', stem: 'What do you usually do in your free time?', options: undefined, correctAnswer: '', explanation: 'Open-ended question. Describe leisure activities and frequency' },
      { number: 2, type: 'short-answer', stem: 'Have your hobbies changed since you were younger?', options: undefined, correctAnswer: '', explanation: 'Open-ended question. Compare past and present hobbies' },
      { number: 3, type: 'short-answer', stem: 'Do you prefer spending free time alone or with others?', options: undefined, correctAnswer: '', explanation: 'Open-ended question. Explain your preference and why' },
      { number: 4, type: 'short-answer', stem: 'Is there a new hobby you would like to try?', options: undefined, correctAnswer: '', explanation: 'Open-ended question. Describe a new hobby you would like to try' }
    ],
    sampleAnswer: `
Sample high-score response for Q1: "In my free time, I'm quite an active person. I try to go jogging at least three times a week, usually in the evening after work. I'm also really into photography — I love heading out on weekends to capture street scenes and candid moments. Besides that, I enjoy reading, particularly non-fiction books about psychology and personal development. I find it helps me unwind while still learning something useful."

Key vocabulary: active person, go jogging, really into photography, capture street scenes, unwind
    `.trim(),
    difficulty: 1
  },
  {
    category: 'speaking',
    section: 0,
    part: 2,
    questionType: 'Cue Card — A Memorable Journey',
    cueCard: 'Describe a memorable journey you have taken.',
    questions: [
      { number: 1, type: 'short-answer', stem: 'where you went', options: undefined, correctAnswer: '', explanation: 'Describe the destination and why you chose it.' },
      { number: 2, type: 'short-answer', stem: 'how you travelled', options: undefined, correctAnswer: '', explanation: 'Describe the mode of transport and the journey experience.' },
      { number: 3, type: 'short-answer', stem: 'who you went with', options: undefined, correctAnswer: '', explanation: 'Describe your travel companion(s) and your relationship.' },
      { number: 4, type: 'short-answer', stem: 'and explain why this journey was memorable for you.', options: undefined, correctAnswer: '', explanation: 'Explain what made this journey special or significant.' }
    ],
    sampleAnswer: `
Sample 2-minute response:

"I'd like to talk about a really memorable journey I took about three years ago to Zhangjiajie in Hunan Province. I went there with two of my closest university friends during the summer break.

We decided to travel by high-speed train, which was actually a very pleasant experience. The journey took about six hours from where we live, and along the way we passed through some stunning countryside scenery.

What made this journey particularly special was our visit to the Zhangjiajie National Forest Park — the place that inspired the floating mountains in the movie Avatar. We spent three days hiking through the park, and the views were absolutely breathtaking. The towering sandstone pillars, shrouded in mist, created an almost otherworldly atmosphere.

I remember one moment very vividly: we were standing on the glass bridge that spans across a deep canyon. I was absolutely terrified because I'm not great with heights, but my friends encouraged me and I managed to cross it. The sense of achievement was incredible.

The whole trip deepened our friendship and gave us wonderful shared memories that we still talk about today. It reminded me that sometimes the best experiences come from pushing ourselves outside our comfort zones."
    `.trim(),
    difficulty: 2
  },
  {
    category: 'speaking',
    section: 0,
    part: 2,
    questionType: 'Cue Card — A Helpful Person',
    cueCard: 'Describe a person who has helped you a lot.',
    questions: [
      { number: 1, type: 'short-answer', stem: 'who this person is', options: undefined, correctAnswer: '', explanation: 'Introduce the person and your relationship.' },
      { number: 2, type: 'short-answer', stem: 'how you know this person', options: undefined, correctAnswer: '', explanation: 'Describe when and how you met.' },
      { number: 3, type: 'short-answer', stem: 'how this person helped you', options: undefined, correctAnswer: '', explanation: 'Give specific examples of their help.' },
      { number: 4, type: 'short-answer', stem: 'and explain how you felt about their help.', options: undefined, correctAnswer: '', explanation: 'Describe your gratitude and the impact.' }
    ],
    sampleAnswer: `
Sample 2-minute response:

"I'd like to talk about my high school English teacher, Ms. Li, who had a profound impact on my life. I met her when I was 15 years old, during my first year of senior high school.

At that time, I was quite shy and struggled with confidence, especially when it came to speaking in public. Ms. Li noticed this and went out of her way to encourage me. She would stay after class to help me practice my pronunciation and presentation skills. What really touched me was that she did this entirely on her own time, never asking for anything in return.

The most significant help she gave me was pushing me to enter an English speech competition. I was absolutely terrified at first, but she spent weeks coaching me — helping me with my script, my body language, and my delivery. In the end, I didn't win, but the experience completely transformed me. I became much more confident, and that confidence spilled over into other areas of my life.

Looking back, I feel incredibly grateful to Ms. Li. Her belief in me at a time when I didn't believe in myself made all the difference. She taught me that a great teacher doesn't just impart knowledge — they inspire and empower their students to discover their own potential."
    `.trim(),
    difficulty: 2
  },
  {
    category: 'speaking',
    section: 0,
    part: 2,
    questionType: 'Cue Card — A Special Gift',
    cueCard: 'Describe a gift you received that was special to you.',
    questions: [
      { number: 1, type: 'short-answer', stem: 'what the gift was', options: undefined, correctAnswer: '', explanation: 'Describe the gift and its appearance.' },
      { number: 2, type: 'short-answer', stem: 'who gave it to you and when', options: undefined, correctAnswer: '', explanation: 'Mention the person and the occasion.' },
      { number: 3, type: 'short-answer', stem: 'why they gave it to you', options: undefined, correctAnswer: '', explanation: 'Explain the reason behind the gift.' },
      { number: 4, type: 'short-answer', stem: 'and explain why this gift was special to you.', options: undefined, correctAnswer: '', explanation: 'Describe its sentimental value.' }
    ],
    sampleAnswer: `
Sample 2-minute response:

"The most special gift I've ever received is a hand-written journal from my grandmother, which she gave me on my 18th birthday. It wasn't expensive or flashy, but it meant more to me than anything money could buy.

The journal was a simple leather-bound notebook with about 200 pages, but what made it extraordinary was that my grandmother had filled the first 50 pages with her own handwriting. She had written down recipes, family stories, and life lessons she had accumulated over her 80-plus years. There were even old black-and-white photographs tucked between the pages, showing her as a young woman and our family through the decades.

She gave it to me because she wanted to pass down our family heritage before her memory started to fade. She said, "I want you to know where you come from, so you can better understand where you're going."

This gift is special to me not just because of its contents, but because of the love and thoughtfulness behind it. Every time I read those pages, I feel connected to my roots in a profound way. Now that my grandmother has passed away, the journal has become even more precious — it's like having a piece of her wisdom and love that I can carry with me forever."
    `.trim(),
    difficulty: 2
  },
  {
    category: 'speaking',
    section: 0,
    part: 3,
    questionType: 'Discussion — Travel & Tourism',
    questions: [
      { number: 1, type: 'short-answer', stem: 'How has tourism changed in your country over the past 20 years?', options: undefined, correctAnswer: '', explanation: 'Discuss changes in domestic and international tourism patterns, infrastructure development, and technology.' },
      { number: 2, type: 'short-answer', stem: 'What are the positive and negative effects of tourism on local communities?', options: undefined, correctAnswer: '', explanation: 'Discuss economic benefits (jobs, income) vs negative impacts (overcrowding, environmental damage, cultural commodification).' },
      { number: 3, type: 'short-answer', stem: 'Do you think virtual tourism could replace real travel in the future?', options: undefined, correctAnswer: '', explanation: 'Discuss technology limitations, the irreplaceable nature of sensory experiences, and potential for VR in education.' },
      { number: 4, type: 'short-answer', stem: 'How can governments balance tourism development with environmental protection?', options: undefined, correctAnswer: '', explanation: 'Discuss policies like visitor caps, eco-tourism promotion, sustainable infrastructure, and education.' }
    ],
    sampleAnswer: `
Sample high-score response for Q1:

"Tourism in China has undergone a dramatic transformation over the past two decades. Twenty years ago, international travel was still relatively uncommon for average Chinese citizens, and domestic tourism was fairly basic. Today, China is the world's largest outbound tourism market, with over 150 million overseas trips made annually before the pandemic. Domestic tourism has also exploded — destinations like Sanya, Lijiang, and Harbin now receive millions of visitors each year. I think several factors have driven this change: rising disposable incomes, improved transportation infrastructure including the high-speed rail network, and the rise of online travel platforms that make booking incredibly convenient. Social media has also played a role, with platforms like Xiaohongshu creating viral travel trends almost overnight."

Key vocabulary: dramatic transformation, outbound tourism, disposable incomes, infrastructure, viral trends
    `.trim(),
    difficulty: 3
  },
  {
    category: 'speaking',
    section: 0,
    part: 3,
    questionType: 'Discussion — Technology & Society',
    questions: [
      { number: 1, type: 'short-answer', stem: 'How has technology changed the way people communicate?', options: undefined, correctAnswer: '', explanation: 'Discuss instant messaging, social media, reduced face-to-face interaction, and global connectivity.' },
      { number: 2, type: 'short-answer', stem: 'Do you think children spend too much time on electronic devices?', options: undefined, correctAnswer: '', explanation: 'Discuss screen time effects on health, social skills, and education. Balance with benefits of technology literacy.' },
      { number: 3, type: 'short-answer', stem: 'Will artificial intelligence replace human jobs in the future?', options: undefined, correctAnswer: '', explanation: 'Discuss automation trends, job displacement vs creation, and the need for reskilling.' },
      { number: 4, type: 'short-answer', stem: 'How can older people be helped to adapt to new technology?', options: undefined, correctAnswer: '', explanation: 'Discuss community training programs, simplified interfaces, family support, and government initiatives.' }
    ],
    sampleAnswer: `
Sample high-score response for Q1:

"Technology has fundamentally transformed communication in ways that would have been unimaginable just a generation ago. The most obvious change is speed — we can now send messages across the globe in seconds through platforms like WeChat or WhatsApp. This instant connectivity has made the world feel much smaller. However, I think there are both positive and negative aspects. On the positive side, we can maintain relationships with friends and family regardless of distance. On the negative side, the quality of our interactions has arguably declined — people often text rather than talk, and face-to-face conversations are becoming less common. There's also the issue of 'digital overload', where the constant stream of notifications can feel overwhelming and actually reduce meaningful communication."

Key vocabulary: fundamentally transformed, instant connectivity, arguably declined, digital overload, meaningful communication
    `.trim(),
    difficulty: 3
  },
  {
    category: 'speaking',
    section: 0,
    part: 3,
    questionType: 'Discussion — Education & Learning',
    questions: [
      { number: 1, type: 'short-answer', stem: 'What makes a good teacher?', options: undefined, correctAnswer: '', explanation: 'Discuss qualities like patience, passion, communication skills, empathy, and subject knowledge.' },
      { number: 2, type: 'short-answer', stem: 'Is online learning as effective as traditional classroom learning?', options: undefined, correctAnswer: '', explanation: 'Compare flexibility and accessibility of online learning with the structure and social aspects of classroom learning.' },
      { number: 3, type: 'short-answer', stem: 'Should students be encouraged to study abroad?', options: undefined, correctAnswer: '', explanation: 'Discuss cultural exposure, language acquisition, costs, and potential challenges of studying abroad.' },
      { number: 4, type: 'short-answer', stem: 'How can schools better prepare students for the job market?', options: undefined, correctAnswer: '', explanation: 'Discuss practical skills training, internships, career counseling, and industry partnerships.' }
    ],
    sampleAnswer: `
Sample high-score response for Q1:

"I believe a great teacher needs a combination of professional competence and personal qualities. First and foremost, they need deep knowledge of their subject — you can't teach what you don't understand. But equally important are interpersonal skills. A good teacher must be patient enough to explain concepts in multiple ways until every student grasps them. They also need empathy — the ability to understand what each student is going through and adapt their approach accordingly. The best teachers I've had were those who genuinely cared about their students' progress, not just their test scores. They inspired curiosity and made learning enjoyable rather than a chore."

Key vocabulary: professional competence, interpersonal skills, adapt their approach, genuinely cared, inspire curiosity
    `.trim(),
    difficulty: 3
  },
  {
    category: 'speaking', section: 0, part: 1, questionType: 'Daily Routine',
    questions: [
      { number: 1, type: 'short-answer', stem: 'What time do you usually get up?', options: undefined, correctAnswer: '', explanation: 'Open question. Describe your morning routine.' },
      { number: 2, type: 'short-answer', stem: 'What is your favourite part of the day?', options: undefined, correctAnswer: '', explanation: 'Open question. Explain why you prefer morning/afternoon/evening.' },
      { number: 3, type: 'short-answer', stem: 'Has your daily routine changed much in recent years?', options: undefined, correctAnswer: '', explanation: 'Open question. Compare past and present routines.' },
      { number: 4, type: 'short-answer', stem: 'Do you prefer having a fixed schedule or a flexible one?', options: undefined, correctAnswer: '', explanation: 'Open question. Discuss pros and cons.' }
    ],
    sampleAnswer: 'I typically wake up around 7am, have a quick breakfast, and start work by 9. I find the morning hours are when I\'m most productive. My evenings are for exercise and reading. My routine has definitely become more structured since I started working full-time compared to university days.',
    difficulty: 1
  },
  {
    category: 'speaking', section: 0, part: 2, questionType: 'Cue Card — An Important Decision',
    cueCard: 'Describe an important decision you made.',
    questions: [
      { number: 1, type: 'short-answer', stem: 'what the decision was', options: undefined, correctAnswer: '', explanation: 'Describe what you decided and the context.' },
      { number: 2, type: 'short-answer', stem: 'when you made this decision', options: undefined, correctAnswer: '', explanation: 'Explain the timing and what led to it.' },
      { number: 3, type: 'short-answer', stem: 'who helped you make the decision', options: undefined, correctAnswer: '', explanation: 'Mention people who advised or influenced you.' },
      { number: 4, type: 'short-answer', stem: 'and explain why it was important to you.', options: undefined, correctAnswer: '', explanation: 'Describe the impact on your life.' }
    ],
    sampleAnswer: 'The most important decision I made was choosing to study abroad for my Master\'s degree. I made this decision during my final year of undergraduate studies. I consulted my professors and my parents extensively — they all encouraged me to take the opportunity. It was important because it transformed my worldview — living in a different culture taught me independence and adaptability. It also opened doors professionally that wouldn\'t have been available otherwise.',
    difficulty: 2
  },
  {
    category: 'speaking', section: 0, part: 3, questionType: 'Discussion — Food & Health',
    questions: [
      { number: 1, type: 'short-answer', stem: 'How have eating habits changed in your country?', options: undefined, correctAnswer: '', explanation: 'Discuss rise of fast food, international cuisine, health awareness.' },
      { number: 2, type: 'short-answer', stem: 'Should governments tax unhealthy food?', options: undefined, correctAnswer: '', explanation: 'Discuss sugar taxes, nudge policies, personal responsibility.' },
      { number: 3, type: 'short-answer', stem: 'Is it better to cook at home or eat out?', options: undefined, correctAnswer: '', explanation: 'Compare cost, health, social aspects, convenience.' },
      { number: 4, type: 'short-answer', stem: 'What role does food play in cultural identity?', options: undefined, correctAnswer: '', explanation: 'Discuss traditional dishes, festivals, globalization vs preservation.' }
    ],
    sampleAnswer: 'Eating habits in China have shifted significantly — fast food consumption has risen alongside economic growth, but there is also a growing health-conscious movement. Younger generations are embracing organic produce and plant-based diets. I think a moderate sugar tax is justified because obesity-related healthcare costs affect everyone through public healthcare systems. However, education is equally important — people need to understand why certain foods are unhealthy, not just feel punished by taxes.',
    difficulty: 3
  },
  {
    category: 'speaking', section: 0, part: 1, questionType: 'Weather & Seasons',
    questions: [
      { number: 1, type: 'short-answer', stem: 'What is the weather like where you live?', options: undefined, correctAnswer: '', explanation: 'Open question. Describe the climate.' },
      { number: 2, type: 'short-answer', stem: 'Do you prefer hot or cold weather?', options: undefined, correctAnswer: '', explanation: 'Open question. Explain your preference.' },
      { number: 3, type: 'short-answer', stem: 'How does the weather affect your mood?', options: undefined, correctAnswer: '', explanation: 'Open question. Discuss seasonal affective changes.' },
      { number: 4, type: 'short-answer', stem: 'Has the climate in your area changed in recent years?', options: undefined, correctAnswer: '', explanation: 'Open question. Give examples.' }
    ],
    sampleAnswer: 'I live in a city with four distinct seasons — hot summers around 35°C and cold winters that can drop below freezing. I definitely prefer autumn because the temperature is comfortable and the colours are beautiful. Rainy days do make me feel a bit lethargic, whereas sunny mornings give me energy. I have noticed summers getting longer and winters milder compared to my childhood.',
    difficulty: 1
  },
  { category: 'speaking', section: 0, part: 1, questionType: 'Food & Cooking', questions: [
    { number: 1, type: 'short-answer', stem: 'Do you enjoy cooking?', options: undefined, correctAnswer: '', explanation: '' },
    { number: 2, type: 'short-answer', stem: 'What kind of food do you like to eat?', options: undefined, correctAnswer: '', explanation: '' },
    { number: 3, type: 'short-answer', stem: 'Did you learn to cook when you were younger?', options: undefined, correctAnswer: '', explanation: '' },
    { number: 4, type: 'short-answer', stem: 'Do you prefer home-cooked food or eating out?', options: undefined, correctAnswer: '', explanation: '' }
  ], sampleAnswer: 'I do enjoy cooking, especially on weekends when I have more time. I like trying out new recipes — Italian and Chinese are my favourites. I learned basic cooking from my mother when I was a teenager. I definitely prefer home-cooked food because it\'s healthier and I can control the ingredients.', difficulty: 1 },
  { category: 'speaking', section: 0, part: 1, questionType: 'Music', questions: [
    { number: 1, type: 'short-answer', stem: 'What type of music do you enjoy?', options: undefined, correctAnswer: '', explanation: '' },
    { number: 2, type: 'short-answer', stem: 'Do you play any musical instruments?', options: undefined, correctAnswer: '', explanation: '' },
    { number: 3, type: 'short-answer', stem: 'Has your taste in music changed over time?', options: undefined, correctAnswer: '', explanation: '' },
    { number: 4, type: 'short-answer', stem: 'Do you prefer listening to music alone or at concerts?', options: undefined, correctAnswer: '', explanation: '' }
  ], sampleAnswer: 'I enjoy a wide range of music — pop, rock, and some classical. I learned to play piano as a child but haven\'t practiced much recently. My taste has definitely evolved; I used to only listen to pop but now appreciate more genres. I prefer live concerts because the atmosphere is electric and you feel connected to the performers.', difficulty: 1 },
  { category: 'speaking', section: 0, part: 1, questionType: 'Sports & Exercise', questions: [
    { number: 1, type: 'short-answer', stem: 'Do you like doing sports?', options: undefined, correctAnswer: '', explanation: '' },
    { number: 2, type: 'short-answer', stem: 'What sports do people in your country enjoy?', options: undefined, correctAnswer: '', explanation: '' },
    { number: 3, type: 'short-answer', stem: 'Did you do much exercise as a child?', options: undefined, correctAnswer: '', explanation: '' },
    { number: 4, type: 'short-answer', stem: 'How important is exercise for a healthy lifestyle?', options: undefined, correctAnswer: '', explanation: '' }
  ], sampleAnswer: 'I try to stay active — I go jogging three times a week and occasionally play badminton with friends. In China, basketball and table tennis are incredibly popular. As a child, I did quite a lot of exercise through school PE classes. I believe exercise is essential not just for physical health but also for mental wellbeing.', difficulty: 1 },
  { category: 'speaking', section: 0, part: 1, questionType: 'Reading Habits', questions: [
    { number: 1, type: 'short-answer', stem: 'How often do you read?', options: undefined, correctAnswer: '', explanation: '' },
    { number: 2, type: 'short-answer', stem: 'What kind of books do you enjoy?', options: undefined, correctAnswer: '', explanation: '' },
    { number: 3, type: 'short-answer', stem: 'Do you prefer physical books or e-books?', options: undefined, correctAnswer: '', explanation: '' },
    { number: 4, type: 'short-answer', stem: 'Did you read a lot as a child?', options: undefined, correctAnswer: '', explanation: '' }
  ], sampleAnswer: 'I try to read for at least 30 minutes every evening before bed. I mainly read fiction — thrillers and historical novels are my favourites. I still prefer physical books because I love the feel of turning pages. As a child I read quite a lot of comic books and adventure stories.', difficulty: 1 },
  { category: 'speaking', section: 0, part: 1, questionType: 'Shopping', questions: [
    { number: 1, type: 'short-answer', stem: 'Do you enjoy shopping?', options: undefined, correctAnswer: '', explanation: '' },
    { number: 2, type: 'short-answer', stem: 'How often do you go shopping?', options: undefined, correctAnswer: '', explanation: '' },
    { number: 3, type: 'short-answer', stem: 'Do you prefer shopping online or in stores?', options: undefined, correctAnswer: '', explanation: '' },
    { number: 4, type: 'short-answer', stem: 'Has online shopping changed how people buy things?', options: undefined, correctAnswer: '', explanation: '' }
  ], sampleAnswer: 'I enjoy shopping but only when I\'m not in a rush. I go grocery shopping twice a week and clothes shopping maybe once a month. I definitely prefer online shopping for convenience — you can compare prices and read reviews. Online shopping has completely changed consumer behaviour; people now expect everything to be available at the click of a button.', difficulty: 1 },
  { category: 'speaking', section: 0, part: 1, questionType: 'Transport', questions: [
    { number: 1, type: 'short-answer', stem: 'How do you usually get around?', options: undefined, correctAnswer: '', explanation: '' },
    { number: 2, type: 'short-answer', stem: 'What is public transport like in your city?', options: undefined, correctAnswer: '', explanation: '' },
    { number: 3, type: 'short-answer', stem: 'Do you prefer driving or taking public transport?', options: undefined, correctAnswer: '', explanation: '' },
    { number: 4, type: 'short-answer', stem: 'How could transport in your area be improved?', options: undefined, correctAnswer: '', explanation: '' }
  ], sampleAnswer: 'I usually take the metro to work — it\'s fast and reliable. Public transport in my city is quite good, with an extensive subway network and frequent buses. I prefer public transport because parking is expensive and traffic can be awful. I think more bike lanes would be a great improvement.', difficulty: 1 },
  { category: 'speaking', section: 0, part: 1, questionType: 'Holidays & Celebrations', questions: [
    { number: 1, type: 'short-answer', stem: 'What is your favourite holiday?', options: undefined, correctAnswer: '', explanation: '' },
    { number: 2, type: 'short-answer', stem: 'How do you usually celebrate important festivals?', options: undefined, correctAnswer: '', explanation: '' },
    { number: 3, type: 'short-answer', stem: 'Are there any festivals you don\'t enjoy?', options: undefined, correctAnswer: '', explanation: '' },
    { number: 4, type: 'short-answer', stem: 'Have celebrations changed compared to the past?', options: undefined, correctAnswer: '', explanation: '' }
  ], sampleAnswer: 'My favourite holiday is Spring Festival because the whole family gathers together. We usually have a big dinner on New Year\'s Eve, give red envelopes, and set off fireworks. I can\'t think of any festival I dislike — they\'re all fun. Celebrations have definitely become more commercialised compared to when my parents were young.', difficulty: 1 },
  { category: 'speaking', section: 0, part: 1, questionType: 'Pets & Animals', questions: [
    { number: 1, type: 'short-answer', stem: 'Do you have any pets?', options: undefined, correctAnswer: '', explanation: '' },
    { number: 2, type: 'short-answer', stem: 'What is your favourite animal?', options: undefined, correctAnswer: '', explanation: '' },
    { number: 3, type: 'short-answer', stem: 'Are pets popular in your country?', options: undefined, correctAnswer: '', explanation: '' },
    { number: 4, type: 'short-answer', stem: 'Do you think keeping pets is good for children?', options: undefined, correctAnswer: '', explanation: '' }
  ], sampleAnswer: 'I have a cat — she\'s a three-year-old British Shorthair. My favourite animal is probably the dolphin because they\'re so intelligent. Pets have become much more popular in China in recent years, especially in cities. I definitely think pets are good for children — they teach responsibility and empathy.', difficulty: 1 },
  { category: 'speaking', section: 0, part: 1, questionType: 'Movies & Films', questions: [
    { number: 1, type: 'short-answer', stem: 'How often do you watch films?', options: undefined, correctAnswer: '', explanation: '' },
    { number: 2, type: 'short-answer', stem: 'What kind of films do you enjoy?', options: undefined, correctAnswer: '', explanation: '' },
    { number: 3, type: 'short-answer', stem: 'Do you prefer watching films at home or at the cinema?', options: undefined, correctAnswer: '', explanation: '' },
    { number: 4, type: 'short-answer', stem: 'Are foreign films popular in your country?', options: undefined, correctAnswer: '', explanation: '' }
  ], sampleAnswer: 'I watch about two or three films a month. I really enjoy science fiction and thrillers — anything with a good plot twist. I prefer the cinema for big blockbusters because of the immersive experience, but for dramas I\'m happy watching at home. Foreign films, especially Hollywood productions, are very popular here.', difficulty: 1 },
  { category: 'speaking', section: 0, part: 1, questionType: 'Clothes & Fashion', questions: [
    { number: 1, type: 'short-answer', stem: 'What kind of clothes do you usually wear?', options: undefined, correctAnswer: '', explanation: '' },
    { number: 2, type: 'short-answer', stem: 'Is fashion important to you?', options: undefined, correctAnswer: '', explanation: '' },
    { number: 3, type: 'short-answer', stem: 'Has your style changed over the years?', options: undefined, correctAnswer: '', explanation: '' },
    { number: 4, type: 'short-answer', stem: 'Do people in your country follow fashion trends?', options: undefined, correctAnswer: '', explanation: '' }
  ], sampleAnswer: 'I usually dress quite casually — jeans, t-shirts, and trainers. Fashion is somewhat important to me; I like to look presentable but I\'m not obsessed with trends. My style has definitely become more mature since my university days. Young people in China definitely follow trends, especially through social media.', difficulty: 1 },
  { category: 'speaking', section: 0, part: 1, questionType: 'Friends & Social Life', questions: [
    { number: 1, type: 'short-answer', stem: 'How often do you see your friends?', options: undefined, correctAnswer: '', explanation: '' },
    { number: 2, type: 'short-answer', stem: 'What do you usually do when you meet friends?', options: undefined, correctAnswer: '', explanation: '' },
    { number: 3, type: 'short-answer', stem: 'Do you prefer having a few close friends or many acquaintances?', options: undefined, correctAnswer: '', explanation: '' },
    { number: 4, type: 'short-answer', stem: 'Has social media changed the way you keep in touch with friends?', options: undefined, correctAnswer: '', explanation: '' }
  ], sampleAnswer: 'I see my close friends once or twice a week. We usually meet for dinner, go to a café, or sometimes go hiking together. I definitely prefer having a small circle of close friends rather than many acquaintances. Social media has made it easier to stay in touch but I think face-to-face time is irreplaceable.', difficulty: 1 },
  { category: 'speaking', section: 0, part: 1, questionType: 'Art & Photography', questions: [
    { number: 1, type: 'short-answer', stem: 'Are you interested in art?', options: undefined, correctAnswer: '', explanation: '' },
    { number: 2, type: 'short-answer', stem: 'Do you like taking photographs?', options: undefined, correctAnswer: '', explanation: '' },
    { number: 3, type: 'short-answer', stem: 'Have you ever visited an art gallery?', options: undefined, correctAnswer: '', explanation: '' },
    { number: 4, type: 'short-answer', stem: 'What kind of art do you find most interesting?', options: undefined, correctAnswer: '', explanation: '' }
  ], sampleAnswer: 'I have a casual interest in art — I enjoy visiting galleries when I travel. I love photography, especially landscape and street photography. I\'ve visited several galleries including the National Gallery in London. I find contemporary art most interesting because it often challenges your perspective.', difficulty: 1 },
  { category: 'speaking', section: 0, part: 1, questionType: 'Languages', questions: [
    { number: 1, type: 'short-answer', stem: 'How many languages can you speak?', options: undefined, correctAnswer: '', explanation: '' },
    { number: 2, type: 'short-answer', stem: 'Are you learning any languages at the moment?', options: undefined, correctAnswer: '', explanation: '' },
    { number: 3, type: 'short-answer', stem: 'Do you think English is difficult to learn?', options: undefined, correctAnswer: '', explanation: '' },
    { number: 4, type: 'short-answer', stem: 'Why do people learn foreign languages?', options: undefined, correctAnswer: '', explanation: '' }
  ], sampleAnswer: 'I can speak Mandarin, my local dialect, and English — so three languages. I\'m currently trying to improve my English for the IELTS exam. I think English grammar is relatively straightforward but the pronunciation and phrasal verbs can be tricky. People learn languages for many reasons — work opportunities, travel, and connecting with other cultures.', difficulty: 1 },
  { category: 'speaking', section: 0, part: 1, questionType: 'Family', questions: [
    { number: 1, type: 'short-answer', stem: 'Do you have a large family?', options: undefined, correctAnswer: '', explanation: '' },
    { number: 2, type: 'short-answer', stem: 'How often do you spend time with your family?', options: undefined, correctAnswer: '', explanation: '' },
    { number: 3, type: 'short-answer', stem: 'Who are you closest to in your family?', options: undefined, correctAnswer: '', explanation: '' },
    { number: 4, type: 'short-answer', stem: 'Has family life changed in your country?', options: undefined, correctAnswer: '', explanation: '' }
  ], sampleAnswer: 'I have a relatively small family — just my parents and one younger sister. We have dinner together most weekends. I\'m probably closest to my mother because we have similar personalities. Family life has changed significantly — families are smaller now and people tend to live further apart.', difficulty: 1 },
  { category: 'speaking', section: 0, part: 1, questionType: 'Technology & Gadgets', questions: [
    { number: 1, type: 'short-answer', stem: 'What electronic devices do you use most often?', options: undefined, correctAnswer: '', explanation: '' },
    { number: 2, type: 'short-answer', stem: 'Do you think you spend too much time on your phone?', options: undefined, correctAnswer: '', explanation: '' },
    { number: 3, type: 'short-answer', stem: 'How has technology made your life easier?', options: undefined, correctAnswer: '', explanation: '' },
    { number: 4, type: 'short-answer', stem: 'Is there any new technology you would like to buy?', options: undefined, correctAnswer: '', explanation: '' }
  ], sampleAnswer: 'I use my smartphone and laptop most frequently — basically all day for work and communication. I probably do spend too much time on my phone; I\'m trying to reduce screen time. Technology has made life so much more convenient — online banking, navigation, instant communication. I\'ve been thinking about getting a tablet for reading and taking notes.', difficulty: 1 }
]

// ============================================================
// Combined data export
// ============================================================

export const allSections: SeedQuestion[] = [
  ...readingSections,
  ...listeningSections,
  ...writingTasks,
  ...speakingParts
]
