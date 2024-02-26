$(document).ready(function() {
    $('#moneyAmountOutput').val($('#moneyAmountSelector').val());
    $('#moneyAmountSelector').mousemove(function(){
        $('#moneyAmountOutput').val($('#moneyAmountSelector').val());
    });
    $('#moneyAmountOutput').change(function(){
        $('#moneyAmountSelector').val($('#moneyAmountOutput').val());
    });
});