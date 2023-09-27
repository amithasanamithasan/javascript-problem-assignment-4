
const address = {
    street: 10,
    house: '15A',
    society: 'EarthPerfect'

   
  };

   const Address={
    
      society:'Earth Perfect'
  };
  const AddRess={
    street:10,
     
 };
  
  // Create a function to output the values from the object
  function findAddress(obj) {
    return[obj.street, obj.house, obj.society ];
    return [obj.street_ ,obj.society____ , obj.society];
    return [obj.street___,obj.society____ , obj.society];
  }
  const values= findAddress(address);
 console.log(values.join(','));  

 
 const values1= findAddress(Address);
 console.log(values1.join(','));
 const values3= findAddress(AddRess);
 console.log(values3.join(','));
 
 


 