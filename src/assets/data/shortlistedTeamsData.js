const shortlistedTeams = [
  {
    name: "Synchronized Minds",
    college: "Indian Institute of Information Technology Bhopal",
    leader: "Manjeet Pathak",
    member1: "Pranjal Dubey",
    member2: "Dhruv Bansal",
    member3: "Amay Shah",
    member4: "Aryan Agarwal",
    member5: "Himanshu Tiwari",
  },
  {
    name: "Binary Bandits",
    college: "VELLORE INSTITUTE OF TECHNOLOGY, Bhopal",
    leader: "SRIJA CHATTOPADHYAY",
    member1: "AMITANSU PRIYADARSAN",
    member2: "GANESH NAVALE",
    member3: "RISHITA YADAV",
    member4: "SWASTIK SINGH",
    member5: "NAMAN HIRANI",
  },
  {
    name: "Decoders",
    college: "Indian Institute of Information Technology Bhopal",
    leader: "Ujjwal Gupta",
    member1: "Nitin Gupta",
    member2: "Gourav Chouhan",
    member3: "Naman Goyal",
  },
  {
    name: "Gravity Falls",
    college: "Thapar Institute For Engineering and Technology",
    leader: "Smriddhi Sahni",
    member1: "Divyansh Kalia",
    member2: "Swayansu S Baral",
    member3: "Arjan Singh Sandhu",
  },
  {
    name: "Crew VI",
    college: "Visvesvaraya National Institute Of Technology,Nagpur",
    leader: "Arya Pathak",
    member1: "Shreyas Jaiswal",
    member2: "Aryan Dwiwedi",
    member3: "Saumya More",
    member4: "Sanchit Padwekar",
    member5: "Rachit Katiyar",
  },
  {
    name: "Try Again!",
    college: "Kashi Institute of Technology",
    leader: "Rishabh Singh",
    member1: "Akriti Yadav",
    member2: "Harshit Ranjan Rai",
    member3: "Manish Kumar Patel",
    member4: "Jai Vishnoo Jaiswal",
    member5: "Vaishali Gupta",
  },
  {
    name: "HexClan",
    college: "Dwarkadas Jivanlal Sanghvi College of Engineering",
    leader: "Lokita Varma",
    member1: "Khushi Mehta",
    member2: "Sarthak Bhan",
    member3: "Priyambi Hiran",
    member4: "Shrey Parekh",
    member5: "Yash Shah",
  },
  {
    name: "UnderBug Coders",
    college: "Dwarkadas. J. Sanghvi College of Engineering",
    leader: "Arpit Shah",
    member1: "Arun Mulakkal",
    member2: "Bhavik Shah",
    member3: "Abhishek Tiwari",
    member4: "Riddhi Sanghani",
    member5: "Riddhi Sharma",
  },
  {
    name: "Code of Duty",
    college: "Dwarkadas Jivanlal Sanghvi College of Engineering",
    leader: "Bhumika Mange",
    member1: "Om Shukla",
    member2: "Aditya Shah",
    member3: "Anish Kulkarni",
    member4: "Urmi Dedhia",
    member5: "Pratham Bhoir",
  },
  {
    name: "HackHeralds",
    college: "Visvesvaraya National Institute of Technology, Nagpur",
    leader: "Bhushan Bahale",
    member1: "Anand Patil",
    member2: "N VIBHAVAN",
    member3: "Yash Gaikwad",
    member4: "Srivardhini Dasarapu",
  },
  {
    name: "Coding Hustlers",
    college: "Visvesvaraya National Institute of Technology",
    leader: "Ahmed Hamzah",
    member1: "Madhav Ishwar",
    member2: "Kishan Verma",
    member3: "Harshit Mishra",
    member4: "Sahil Baori",
  },
  {
    name: "Blockers",
    college: "Vellore Institute of Technology, Bhopal",
    leader: "Harsh Khati",
    member1: "Vedant Upadhye",
    member2: "Dev Gupta",
  },
  {
    name: "Vnit coders",
    college: "VNIT",
    leader: "Nikhil Bhisle",
    member1: "Akanksha Ankath",
    member2: "Swaroop Talakwar",
  },
  {
    name: "Lakshya ",
    college: "United Institute of Technology, Prayagraj ",
    leader: "Harshit Agrawal ",
    member1: "Harshit Agrawal",
    member2: "Mishal Al Shahari",
    member3: "Sanjeev Tiwari ",
    member4: "Dig Vijay Singh ",
  },
  {
    name: "The Boys",
    college: "National Institute Of Technology",
    leader: "Viraj Chandra",
    member1: "Piyush Kumar",
    member2: "Vibhor Singh",
    member3: "Anurag Deo",
    member4: "Aniket Kumar",
  },
  {
    name: "The Scripters",
    college: "NIT Raipur",
    leader: "Satwik Agrawal",
    member1: "Shubham Bawner",
    member2: "ShriKrushna Bhagwat",
    member3: "Rishav Gandhi",
    member4: "Gaurav Patel",
    member5: "C Vaibhav",
  },
  {
    name: "CHATGDP",
    college: "International Institute of Information Technology, Naya Raipur",
    leader: "Ravil Patel",
    member1: "Shivam Kushwaha",
    member2: "Sanskar Singh",
    member3: "Shivaibhav Dewangan",
    member4: "Aman Sahu",
    member5: "Rigved Desai",
  },
  {
    name: "Executioners",
    college: "Rungta College of Engineering and Technology",
    leader: "Kumar Aditya",
    member1: "Aditya Rungta",
    member2: "Shubham Sagar",
    member3: "Aman Raj Sharma",
    member4: "Adarsh Kumar Raghuwanshi",
    member5: "Kundan Kumar",
  },
  {
    name: "The Phantom Troupe",
    college: "National Institute of Technology Raipur",
    leader: "Premchand Maddikuntla",
    member1: "Prudhvi Thimmareddy",
    member2: "Varun Reddy K",
    member3: "Alim Khan",
  },
  {
    name: "@comders11",
    college: "National institute of technology Raipur ",
    leader: "Aanchal Sharma ",
    member1: "Deepshikha Sharma",
    member2: "Satyam singh",
    member3: "Neha sahu ",
  },
  {
    name: "Lorem Ipsum",
    college: "Government Engineering College, Raipur",
    leader: "Yash Joglekar ",
    member1: "Abhinav Sharma",
    member2: "Chandan Kumar Soni",
    member3: "Devesh Swarnkar",
    member4: "Krishna Dubey",
    member5: "Nitish Kumar Kushwaha",
  },
  {
    name: "Forty Two",
    college: "National Institute Of Technology, Raipur",
    leader: "Pramil Kesarwani",
    member1: "Pratham Gandhi",
    member2: "Aditya Ray",
    member3: "Geddada Chandrika",
    member4: "Utkarsh Maurya",
    member5: "Ritesh Bhartiya",
  },
  {
    name: "TechnoCrats",
    college: "International Institute of Information Technology Naya Raipur",
    leader: "Sonali Banjare",
    member1: "Aaditya Kumar",
    member2: "SONALI TUDU",
    member3: "Subhadeep Barman",
    member4: "Shreedhar Tiwari",
  },
  {
    name: "Exception!",
    college: "Bhilai Institute of Technology Durg",
    leader: "Sanskriti Harmukh",
    member1: "Adiba Noor",
    member2: "Chaitanya Rao",
    member3: "Krish Chopra",
    member4: "Shubhankar Tiwary",
  },
  {
    name: "Technicutives",
    college: "National Institute of Technology Raipur",
    leader: "Aditya Prasad",
    member1: "Prerna Singh",
    member2: "Harsh Dewangan",
    member3: "Bhupendra Gehlot",
    member4: "Anuj Kumar",
    member5: "Mohit Doraiburu",
  },
];

export default shortlistedTeams;
