export const specialties = [
  'Oral and Maxillofacial Surgery',
  'Endodontics',
  'Orthodontics',
  'Prosthodontics',
  'Periodontics',
  'Pedodontics',
  'Conservative Dentistry',
  'Other recognised dental specialties',
];

export const trustPoints = [
  {
    title: 'Verified professional credentials',
    description: 'Each specialist is reviewed for qualifications, registration details, and compliance before onboarding.',
  },
  {
    title: 'Flexible scheduling',
    description: 'Search by date, specialism, and city to secure dental coverage exactly when your clinic needs it.',
  },
  {
    title: 'Convenient matching',
    description: 'Clinic-specific requirements are matched to specialist availability, travel radius, and expertise.',
  },
  {
    title: 'Transparent booking terms',
    description: 'Clear session fees, cancellation rules, and consent workflows help both parties plan with confidence.',
  },
];

export type Specialist = {
  id: string;
  name: string;
  qualification: string;
  specialty: string;
  experience: number;
  city: string;
  radius: string;
  dates: string[];
  fee: string;
  verification: 'Verified' | 'Pending';
  summary: string;
  tags: string[];
};

export const specialists: Specialist[] = [
  {
    id: 'dr-asha-mehta',
    name: 'Dr. Asha Mehta',
    qualification: 'BDS, MDS Orthodontics',
    specialty: 'Orthodontics',
    experience: 12,
    city: 'Mumbai',
    radius: '25 km',
    dates: ['20 Oct 2026', '22 Oct 2026', '27 Oct 2026'],
    fee: '₹2,800 / session',
    verification: 'Verified',
    summary: 'Experienced orthodontist supporting aligner assessments, retention planning, and case reviews for busy clinics.',
    tags: ['Clear aligners', 'Retention', 'Case reviews'],
  },
  {
    id: 'dr-vikram-nair',
    name: 'Dr. Vikram Nair',
    qualification: 'BDS, MDS Endodontics',
    specialty: 'Endodontics',
    experience: 9,
    city: 'Bengaluru',
    radius: '18 km',
    dates: ['21 Oct 2026', '23 Oct 2026', '30 Oct 2026'],
    fee: '₹3,100 / session',
    verification: 'Verified',
    summary: 'Endodontic consultant for root canal procedures, diagnostic second opinions, and emergency endodontic coverage.',
    tags: ['Microsurgery', 'RCT', 'Urgent care'],
  },
  {
    id: 'dr-rhea-kapoor',
    name: 'Dr. Rhea Kapoor',
    qualification: 'BDS, MDS Prosthodontics',
    specialty: 'Prosthodontics',
    experience: 7,
    city: 'Delhi NCR',
    radius: '30 km',
    dates: ['19 Oct 2026', '25 Oct 2026', '02 Nov 2026'],
    fee: '₹2,600 / session',
    verification: 'Verified',
    summary: 'Focuses on smile makeovers, fixed prosthetics, and restorative planning for high-volume dental practices.',
    tags: ['Crowns', 'Bridges', 'Full mouth rehab'],
  },
  {
    id: 'dr-sanjay-menon',
    name: 'Dr. Sanjay Menon',
    qualification: 'BDS, MDS Periodontics',
    specialty: 'Periodontics',
    experience: 11,
    city: 'Kochi',
    radius: '20 km',
    dates: ['18 Oct 2026', '24 Oct 2026', '28 Oct 2026'],
    fee: '₹2,900 / session',
    verification: 'Verified',
    summary: 'Periodontist available for specialist consultations, gum surgery support, and treatment planning sessions.',
    tags: ['Gum health', 'Surgery', 'Maintenance'],
  },
  {
    id: 'dr-meera-iyer',
    name: 'Dr. Meera Iyer',
    qualification: 'BDS, MDS Pedodontics',
    specialty: 'Pedodontics',
    experience: 8,
    city: 'Chennai',
    radius: '15 km',
    dates: ['17 Oct 2026', '26 Oct 2026', '29 Oct 2026'],
    fee: '₹2,400 / session',
    verification: 'Pending',
    summary: 'Child dentistry specialist helping clinics manage pediatric restorative care and behaviour management.',
    tags: ['Paediatric care', 'Behaviour management', 'Preventive dentistry'],
  },
  {
    id: 'dr-rahul-saxena',
    name: 'Dr. Rahul Saxena',
    qualification: 'BDS, MDS Oral Surgery',
    specialty: 'Oral and Maxillofacial Surgery',
    experience: 13,
    city: 'Hyderabad',
    radius: '28 km',
    dates: ['20 Oct 2026', '31 Oct 2026', '04 Nov 2026'],
    fee: '₹3,400 / session',
    verification: 'Verified',
    summary: 'Oral surgeon supporting surgical referrals, implant consults, and emergency extraction coverage for busy practices.',
    tags: ['Extractions', 'Implants', 'Emergency surgical care'],
  },
];

export const bookingWorkflow = [
  'Clinic posts specialist requirement',
  'Matching specialists are filtered by specialty, city, availability, and fee',
  'Clinic requests a booking',
  'Specialist accepts or declines',
  'Both parties receive confirmation and terms',
  'Appointment is completed and payment status is updated',
];

export const faqs = [
  {
    question: 'Who can register on DentConnect?',
    answer: 'DentConnect is designed for verified clinics, MDS specialists, and qualified dentists in India who meet clinical and documentation requirements.',
  },
  {
    question: 'What happens after a clinic posts a requirement?',
    answer: 'Eligible professionals matching the specialty, location, and availability are shown to the clinic. The clinic can request a booking, and the specialist can accept or decline.',
  },
  {
    question: 'Are specialists verified before bookings?',
    answer: 'Only verified professionals with completed credential checks and compliance review are marked verified and eligible for clinical bookings.',
  },
  {
    question: 'How are cancellations handled?',
    answer: 'The platform follows a clear cancellation workflow with pre-agreed terms, refund handling, and communication between the clinic and specialist.',
  },
  {
    question: 'Does DentConnect authorise clinical practice?',
    answer: 'No. DentConnect coordinates qualified professionals and provides compliance workflows, but clinics and professionals remain responsible for local legal, licensing, and clinical governance obligations.',
  },
];

export const clinicBookings = [
  {
    id: 'BK-2041',
    status: 'Pending',
    clinic: 'SmileCraft Dental Studio',
    specialist: 'Dr. Vikram Nair',
    date: '20 Oct 2026',
    amount: '₹12,000',
  },
  {
    id: 'BK-2042',
    status: 'Accepted',
    clinic: 'Apex Dental Care',
    specialist: 'Dr. Asha Mehta',
    date: '22 Oct 2026',
    amount: '₹9,800',
  },
  {
    id: 'BK-2043',
    status: 'Completed',
    clinic: 'Oral Horizon Clinic',
    specialist: 'Dr. Rahul Saxena',
    date: '09 Oct 2026',
    amount: '₹16,500',
  },
  {
    id: 'BK-2044',
    status: 'Cancelled',
    clinic: 'BrightSmile Family Dental',
    specialist: 'Dr. Meera Iyer',
    date: '18 Oct 2026',
    amount: '₹7,200',
  },
];

export const dashboardMetrics = [
  { label: 'Open requirements', value: '04' },
  { label: 'Accepted slots', value: '12' },
  { label: 'Pending payments', value: '03' },
  { label: 'Verification checks', value: '09' },
];
