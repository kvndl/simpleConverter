$(document).ready(function ()
{
    $(function calcFeetInches()
    {
        var meters = parseInt("#txtMeters").val();
        var centiM = parseInt("#txtCentiM").val();

        var feet = (meters * 3.28084);
        var inches = (centiM * 0.393701);

        var height = (feet + (inches / 12));

        ("#outConversion").html(height);
    }); //end calcFeetInches
  }); // end function