// script for  advisor list
 
const advisorList = [
      {id:1, name: "এড. আজিজুল হক চৌঃ", position: "উপদেষ্টা", mobile: "০১৭১২৩৪৫৬৭৮", image: "./assets/images/team/profile.jpeg"},
      {id:2, name: "এম ফজলুল কাদের", position: "উপদেষ্টা", mobile: "০১৮৯৮৭৬৫৪৩২", image: "./assets/images/team/profile.jpeg"},
      {id:3, name: "এম এ কাইয়ুম", position: "উপদেষ্টা", mobile: "০১৯১২৩৪৫৬৭৮", image: "./assets/images/team/profile.jpeg"}
    ];

    const tablebody = document.querySelector("#advisorTableBody");

    advisorList.forEach((advisor, index) => {
      const row = document.createElement('tr');
      
      // সিরিয়াল নম্বর
      const serialCell = document.createElement('td');
      serialCell.textContent = index + 1;
      
      // ছবি কলাম
      const imageCell = document.createElement('td');
      if(advisor.image) {
        const img = document.createElement('img');
        img.src = advisor.image;
        img.alt = advisor.name;
        img.className = 'profile-img';
        img.onerror = function() {
          this.parentNode.innerHTML = '<div class="no-image">ছবি নেই</div>';
        };
        imageCell.appendChild(img);
      } else {
        const noImageDiv = document.createElement('div');
        noImageDiv.className = 'no-image';
        noImageDiv.textContent = 'ছবি নেই';
        imageCell.appendChild(noImageDiv);
      }
      
      // নাম কলাম
      const nameCell = document.createElement('td');
      nameCell.textContent = advisor.name;
      
      // পদবী কলাম
      const positionCell = document.createElement('td');
      positionCell.textContent = advisor.position;
      
      // মোবাইল কলাম
      const mobileCell = document.createElement('td');
      mobileCell.textContent = advisor.mobile || 'N/A';
      
      // সব কলাম রোতে যোগ করুন
      row.append(serialCell, imageCell, nameCell, positionCell, mobileCell);
      
      // টেবিল বডিতে রো যোগ করুন
      tablebody.appendChild(row);
    });
// script  for executive committee list

const executiveList = [
    {id: 1, name: "আবদুল জব্বার", position: "সভাপতি", mobile: "০১৯১২৩৪৫৬৭৮"},
    {id: 2, name: "বজলুল হক", position: "সাধারণ সম্পাদক", mobile: "০১৮৯৮৭৬৫৪৩২"},
    {id: 3, name: "দেলোয়ার হোসেন এফসিএস", position: "সাংগঠনিক সম্পাদক", mobile: "০১৯১২৩৪৫৬৭৮"},
    {id: 4, name: "মোঃ সেলিম", position: "অর্থ সম্পাদক", mobile: "০১৯৮৭৬৫৪৩২১"},
    {id: 5, name: "মোঃ আলমগীর", position: "দপ্তর সম্পাদক", mobile: "০১৯১২৩৪৫৬৭৮"},
    {id: 6, name: "মোঃ কামাল", position: "সদস্য", mobile: "০১৯৮৭৬৫৪৩২১"},
    {id: 7, name: "মোঃ সেলিম", position: "সদস্য", mobile: "০১৯১২৩৪৫৬৭৮"},
    {id: 8, name: "মোঃ রফিকুল ইসলাম", position: "সদস্য", mobile: "০১৯৮৭৬৫৪৩২১"},
    {id: 9, name: "মোঃ কামাল", position: "সদস্য", mobile: "০১৯১২৩৪৫৬৭৮"},
    {id: 10, name: "মোঃ সেলিম", position: "সদস্য", mobile: "০১৯৮৭৬৫৪৩২১"},
    {id: 11, name: "মোঃ রফিকুল ইসলাম", position: "সদস্য", mobile: "০১৯১২৩৪৫৬৭৮"},
    {id: 12, name: "মোঃ কামাল", position: "সদস্য", mobile: "০১৯৮৭৬৫৪৩২১"},

];
const executiveTableBody = document.querySelector("#executiveTableBody");
executiveList.forEach((executive, index) =>{
     const row = document.createElement('tr');
     row.append(
        createTableCell(index + 1),
        createTableCell(executive.name),
        createTableCell(executive.position),
        createTableCell(executive.mobile || 'N/A') // মোবাইল না থাকলে N/A দেখাবে
     );
        executiveTableBody.append(row);
});
function createTableCell(content) {
    const td = document.createElement('td');
    td.textContent = content;
    return td;
};

// script for member list

const memberList = [
    {id: 1, name: "মোঃ আলমগীর", position: "সদস্য", mobile: "০১৯১২৩৪৫৬৭৮"},
    {id: 2, name: "মোঃ কামাল", position: "সদস্য", mobile: "০১৯৮৭৬৫৪৩২১"},
    {id: 3, name: "মোঃ সেলিম", position: "সদস্য", mobile: "০১৯১২৩৪৫৬৭৮"},
    {id: 4, name: "মোঃ রফিকুল ইসলাম", position: "সদস্য", mobile: "০১৯৮৭৬৫৪৩২১"},
    {id: 5, name: "মোঃ কামাল", position: "সদস্য", mobile: "০১৯১২৩৪৫৬৭৮"},
    {id: 6, name: "মোঃ সেলিম", position: "সদস্য", mobile: "০১৯৮৭৬৫৪৩২১"},
    {id: 7, name: "মোঃ রফিকুল ইসলাম", position: "সদস্য", mobile: "০১৯১২৩৪৫৬৭৮"},
];
const memberTableBody = document.querySelector("#memberTableBody");
memberList.forEach((member, index) => {
    const row = document.createElement('tr');
    row.append(
        createTableCell(index + 1),
        createTableCell(member.name),
        createTableCell(member.position),
        createTableCell(member.mobile || 'N/A') // মোবাইল না থাকলে N/A দেখাবে
    );
    memberTableBody.append(row);
});