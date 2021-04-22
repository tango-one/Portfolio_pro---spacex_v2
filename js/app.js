

fetch('https://api.spacexdata.com/v4/launches/upcoming')
.then(result => result.json())
.then((res) => {
    (res);


     

                                                      
      ///////////////// date format  
        
           

        const date = Date.parse(res[0].date_utc);
        const options = {
        
            year: '2-digit',
            day: 'numeric',
            month: 'numeric',
            
            hour: 'numeric', /* numeric */
            minute: 'numeric',

            //timeZoneName: 'short',
            timeZone: 'UTC' /* utc */
    };
        const dateFormatted = new Intl.DateTimeFormat('en-GB', options).format(date);
        document.getElementById('launch-date').innerHTML = (dateFormatted);


        /////////////////// mission name

        document.getElementById('launch-name').innerHTML = (res[0].name);

        // flight no

        document.getElementById('flight-no').innerHTML = (res[0].flight_number);


 
      });
