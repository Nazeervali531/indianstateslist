
function abcd(){
    let select=document.querySelector('#Mystate');
    if(select.value==='Karnataka'){
        let Ka=[
			'Bagalkot',
			'Bangalore Rural',
			'Bangalore Urban',
			'Belgaum',
			'Bellary',
			'Bidar',
			'Bijapur',
			'Chamarajnagar',
			'Chikkamagaluru',
			'Chikkaballapur',
			'Chitradurga',
			'Davanagere',
			'Dharwad',
			'Dakshina Kannada',
			'Gadag',
			'Gulbarga',
			'Hassan',
			'Haveri district',
			'Kodagu',
			'Kolar',
			'Koppal',
			'Mandya',
			'Mysore',
			'Raichur',
			'Shimoga',
			'Tumkur',
			'Udupi',
			'Uttara Kannada',
			'Ramanagara',
			'Yadgir',
    ]
    Ka.forEach((kadtlist)=>{
       let li=document.createElement('li')
       li.classList.add('listitem')
       li.innerHTML=kadtlist
       let newww=document.querySelector('.listofdistrict')
       newww.appendChild(li)  
       select.value=''
       
       
       

    })
    
   
    }
    if(select.value==='Andhra Pradesh'){
        let Ap=[
			'Adilabad',
			'Anantapur',
			'Chittoor',
			'Kakinada',
			'Guntur',
			'Hyderabad',
			'Karimnagar',
			'Khammam',
			'Krishna',
			'Kurnool',
			'Mahbubnagar',
			'Medak',
			'Nalgonda',
			'Nizamabad',
			'Ongole',
			'Hyderabad',
			'Srikakulam',
			'Nellore',
			'Visakhapatnam',
			'Vizianagaram',
			'Warangal',
			'Eluru',
			'Kadapa',
        ]
        Ap.forEach((kadtlist)=>{
            let li=document.createElement('li')
            li.classList.add('listitem')
            li.innerHTML=kadtlist
            let newww=document.querySelector('.listofdistrict')
            newww.appendChild(li)  
            
            
            
     
         })
        
    }
    if(select.value==='Goa'){
        let Ga=[
			'North Goa',
			'South Goa'
]
Ga.forEach((kadtlist)=>{
    let li=document.createElement('li')
    li.classList.add('listitem')
    li.innerHTML=kadtlist
    let newww=document.querySelector('.listofdistrict')
    newww.appendChild(li)  
    
    
    

 })
    }
    if(select.value==='Tamil Nadu'){
        let Tn=[
			'Ariyalur',
			'Chennai',
			'Coimbatore',
			'Cuddalore',
			'Dharmapuri',
			'Dindigul',
			'Erode',
			'Kanchipuram',
			'Kanyakumari',
			'Karur',
			'Madurai',
			'Nagapattinam',
			'Nilgiris',
			'Namakkal',
			'Perambalur',
			'Pudukkottai',
			'Ramanathapuram',
			'Salem',
			'Sivaganga',
			'Tirupur',
			'Tiruchirappalli',
			'Theni',
			'Tirunelveli',
			'Thanjavur',
			'Thoothukudi',
			'Tiruvallur',
			'Tiruvarur',
			'Tiruvannamalai',
			'Vellore',
			'Viluppuram',
			'Virudhunagar',
    ]
    Tn.forEach((kadtlist)=>{
        let li=document.createElement('li')
        li.classList.add('listitem')
        li.innerHTML=kadtlist
        let newww=document.querySelector('.listofdistrict')
        newww.appendChild(li)  
        
        
        
    
     })
    }if(select.value==='Mizoram'){
        let Tg=['Aizawl',
        'Champhai',
        'Kolasib',
        'Lawngtlai',
        'Lunglei',
        'Mamit',
        'Saiha',
        'Serchhip',
        ]
        Tg.forEach((kadtlist)=>{
            let li=document.createElement('li')
            li.classList.add('listitem')
            li.innerHTML=kadtlist
            let newww=document.querySelector('.listofdistrict')
            newww.appendChild(li)  
            
            
            
        
         })
    }

}