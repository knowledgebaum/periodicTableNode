$(document).ready(function ()
{
    var pathname = window.location.pathname;
    

//Populate Periodic Table Using Mongo DB
    if (pathname === '/mongoTable')
    {

        $.get("/ajax", function (data, status)
        {
            //var obj = JSON.parse(data)

           //Loop through all elements and add to table.
            for (var i = 1; i <= 118; i++)
            {
                // //Important Variables e and id
                e = data['elements'][i - 1]
                id = "#id" + i //IDnumber 

                //$(id).find("at_num").text(e['number'])
                $(id).find(".symbol").text(e['symbol'])
                $(id).find(".at_details").text(e['Elname'])
                console.log(id)
            }
        });
        //['elements'][0]['stuff']
        $('.at_num').empty();
        $('.symbol').text("Sym");
        $('.at_details').text("Element")
    }
//EMPTY TABLE using Jquery 
 //search elements, symbols (div: class="at_num" , class="symbol", class="at_details" )
    if (pathname === '/empty')
    {
        $('.at_num').empty();
        $('.symbol').text("Sym");
        $('.at_details').text("Element")
    }

});


//https://www.w3schools.com/jquery/jquery_dom_set.asp

