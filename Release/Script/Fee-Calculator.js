// Sélection des éléments DOM
let input = document.querySelector("#annual_revenue_field");
let inputYl = document.querySelector("#expected_youloop_field");
let error = document.querySelector("#erreur");
let errorYl = document.querySelector("#erreurYl");

// Écouteur d'événement pour le champ input
input.addEventListener("keyup", () => {
  if(isNaN(parseFloat(input.value))){
    error.style.display = "";
    input.style.color = "red";
  } else {
    error.style.display = "none";
    input.style.color = "black";
    calculTotal();
  }   
});

// Écouteur d'événement pour le champ inputYl
inputYl.addEventListener("keyup", () => {
  if(isNaN(parseFloat(inputYl.value))){
    errorYl.style.display = "";
    inputYl.style.color = "red";
  } else {
    errorYl.style.display = "none";
    inputYl.style.color = "black";
    calculTotal();
  }   
});

// Fonction de calcul des totaux
function calculTotal(){
  // Récupération des valeurs des champs
  let revenueAnnuel = parseFloat(input.value);
  let revenueAnnuelYouLoop = parseFloat(inputYl.value);
  let valueCombo = revenueAnnuel + revenueAnnuelYouLoop;
  let value1 = parseInt(document.querySelector('#slider1').value);
  let value2 = parseInt(document.querySelector('#slider2').value);
  let value3 = parseInt(document.querySelector('#slider3').value);
  let value4 = parseInt(document.querySelector('#slider4').value);
  let value5 = parseInt(document.querySelector('#slider5').value);
  let value6 = parseInt(document.querySelector('#slider6').value);
  let value7 = parseInt(document.querySelector('#slider7').value);
  let value8 = parseInt(document.querySelector('#slider8').value);
  let value9 = 30; //Commission de Youloop
  let Ray = parseInt(inputYl.value);
  let valueTot = (value1 + value2 + value3 + value4 + value5 + value6 + value7 + value8);
  let valueYLTot = (value1 + value2*0.3 + value3*0 + value4*0.5 + value5 + value6*2 + value7 + value8*0.3 + value9);


  /* ----- 1er slider ------- */
  document.querySelector("#feeBase1").innerHTML = "Frais de base " + value1 + " % ";
  document.querySelector("#feeBase1BIS").innerHTML = ((document.querySelector("#annual_revenue_field").value/100) * value1).toLocaleString('ch') + " CHF";
  document.querySelector("#feeYL1").innerHTML = "Frais de Youloop " + value1 + " % ";
  document.querySelector("#feeYL1BIS").innerHTML = ((document.querySelector("#expected_youloop_field").value/100) * value1).toLocaleString('ch') + " CHF";
  document.querySelector("#feeComb1").innerHTML = "Total des frais " + Math.round(((document.querySelector("#annual_revenue_field").value/100000) * value1) + ((document.querySelector("#expected_youloop_field").value/100000) * value1) / valueCombo) + " % ";
  document.querySelector("#feeComb1BIS").innerHTML = (parseInt(document.querySelector("#annual_revenue_field").value)/100*value1 + parseInt(document.querySelector("#expected_youloop_field").value/100*value1)).toLocaleString('ch') + " CHF";
  /* ----- 2eme slider ------- */
  document.querySelector("#feeBase2").innerHTML = "Frais de base " + value2 + " %";
  document.querySelector("#feeBase2BIS").innerHTML = ((document.querySelector("#annual_revenue_field").value/100) * value2).toLocaleString('ch') + " CHF";
  document.querySelector("#feeYL2").innerHTML = "Frais de Youloop " + Math.round(value2 *0.3) + " %";
  document.querySelector("#feeYL2BIS").innerHTML = Math.round((document.querySelector("#expected_youloop_field").value/100) * (value2 *0.3)).toLocaleString('ch') + " CHF";
  document.querySelector("#feeComb2").innerHTML = "Total des frais " + Math.round((parseInt(document.querySelector("#annual_revenue_field").value)/100*value2 + parseInt(document.querySelector("#expected_youloop_field").value/100*(value2 *0.3))) * 100 / valueCombo) + " %";
  document.querySelector("#feeComb2BIS").innerHTML = (parseInt(document.querySelector("#annual_revenue_field").value)/100*value2 + parseInt(document.querySelector("#expected_youloop_field").value/100*(value2 *0.3))).toLocaleString('ch') + " CHF";
  /* ----- 3eme slider ------- */
  document.querySelector("#feeBase3").innerHTML = "Frais de base " + value3 + " %";
  document.querySelector("#feeBase3BIS").innerHTML = ((document.querySelector("#annual_revenue_field").value/100) * value3).toLocaleString('ch') + " CHF";
  document.querySelector("#feeYL3").innerHTML = "Frais de Youloop " + value3 * 0 + " %";
  document.querySelector("#feeYL3BIS").innerHTML = ((document.querySelector("#expected_youloop_field").value/100) * value3 * 0).toLocaleString('ch') + " CHF";
  document.querySelector("#feeComb3").innerHTML = "Total des frais " + Math.round((parseInt(document.querySelector("#annual_revenue_field").value)/100*value3 + parseInt(document.querySelector("#expected_youloop_field").value/100*(value3 *0))) * 100 / valueCombo) + " %";
  document.querySelector("#feeComb3BIS").innerHTML = (parseInt(document.querySelector("#annual_revenue_field").value)/100*value3 + parseInt(document.querySelector("#expected_youloop_field").value/100*value3*0)).toLocaleString('ch') + " CHF";
  /* ----- 4eme slider ------- */
  document.querySelector("#feeBase4").innerHTML = "Frais de base " + value4 + " %";
  document.querySelector("#feeBase4BIS").innerHTML = ((document.querySelector("#annual_revenue_field").value/100) * value4).toLocaleString('ch') + " CHF";
  document.querySelector("#feeYL4").innerHTML = "Frais de Youloop " + Math.round(value4 *0.5) + " %";
  document.querySelector("#feeYL4BIS").innerHTML = Math.round((document.querySelector("#expected_youloop_field").value/100) * (value4 *0.5)).toLocaleString('ch') + " CHF";
  document.querySelector("#feeComb4").innerHTML = "Total des frais " + Math.round((parseInt(document.querySelector("#annual_revenue_field").value)/100*value4 + parseInt(document.querySelector("#expected_youloop_field").value/100*(value4 *0.5))) * 100 / valueCombo) + " %";
  document.querySelector("#feeComb4BIS").innerHTML = (parseInt(document.querySelector("#annual_revenue_field").value)/100*value4 + parseInt(document.querySelector("#expected_youloop_field").value/100*(value4 *0.5))).toLocaleString('ch') + " CHF";
  /* ----- 5eme slider ------- */
  document.querySelector("#feeBase5").innerHTML = "Frais de base " + value5 + " %";
  document.querySelector("#feeBase5BIS").innerHTML = ((document.querySelector("#annual_revenue_field").value/100) * value5).toLocaleString('ch') + " CHF";
  document.querySelector("#feeYL5").innerHTML = "Frais de Youloop " + value5 + " %";
  document.querySelector("#feeYL5BIS").innerHTML = ((document.querySelector("#expected_youloop_field").value/100) * value5).toLocaleString('ch') + " CHF";
  document.querySelector("#feeComb5").innerHTML = "Total des frais " + Math.round(((document.querySelector("#annual_revenue_field").value/100000) * value5) + ((document.querySelector("#expected_youloop_field").value/100000) * value5) / valueCombo) + " %";
  document.querySelector("#feeComb5BIS").innerHTML = (parseInt(document.querySelector("#annual_revenue_field").value)/100*value5 + parseInt(document.querySelector("#expected_youloop_field").value/100*value5)).toLocaleString('ch') + " CHF";
  /* ----- 6eme slider ------- */
  document.querySelector("#feeBase6").innerHTML = "Frais de base " + value6 + " %";
  document.querySelector("#feeBase6BIS").innerHTML = ((document.querySelector("#annual_revenue_field").value/100) * value6).toLocaleString('ch') + " CHF";
  document.querySelector("#feeYL6").innerHTML = "Frais de Youloop " + Math.round(value6 * 2) + " %";
  document.querySelector("#feeYL6BIS").innerHTML = Math.round((document.querySelector("#expected_youloop_field").value/100) * (value6 * 2)).toLocaleString('ch') + " CHF";
  document.querySelector("#feeComb6").innerHTML = "Total des frais " + Math.round((parseInt(document.querySelector("#annual_revenue_field").value)/100*value6 + parseInt(document.querySelector("#expected_youloop_field").value/100*(value6 * 2))) * 100 / valueCombo) + " %";
  document.querySelector("#feeComb6BIS").innerHTML = (parseInt(document.querySelector("#annual_revenue_field").value)/100*value6 + parseInt(document.querySelector("#expected_youloop_field").value/100*(value6 * 2))).toLocaleString('ch') + " CHF";
  /* ----- 7eme slider ------- */
  document.querySelector("#feeBase7").innerHTML = "Frais de base " + value7 + " %";
  document.querySelector("#feeBase7BIS").innerHTML = ((document.querySelector("#annual_revenue_field").value/100) * value7).toLocaleString('ch') + " CHF";
  document.querySelector("#feeYL7").innerHTML = "Frais de Youloop " + value7 + " %";
  document.querySelector("#feeYL7BIS").innerHTML = ((document.querySelector("#expected_youloop_field").value/100) * value7).toLocaleString('ch') + " CHF";
  document.querySelector("#feeComb7").innerHTML = "Total des frais " + Math.round(((document.querySelector("#annual_revenue_field").value/100000) * value7) + ((document.querySelector("#expected_youloop_field").value/100000) * value7) / valueCombo) + " %";
  document.querySelector("#feeComb7BIS").innerHTML = (parseInt(document.querySelector("#annual_revenue_field").value)/100*value7 + parseInt(document.querySelector("#expected_youloop_field").value/100*value7)).toLocaleString('ch') + " CHF";
  /* ----- 8eme slider ------- */
  document.querySelector("#feeBase8").innerHTML = "Frais de base " + value8 + " %";
  document.querySelector("#feeBase8BIS").innerHTML = ((document.querySelector("#annual_revenue_field").value/100) * value8).toLocaleString('ch') + " CHF";
  document.querySelector("#feeYL8").innerHTML = "Frais de Youloop " + Math.round(value8 *0.3) + " %";
  document.querySelector("#feeYL8BIS").innerHTML = Math.round((document.querySelector("#expected_youloop_field").value/100) * (value8 *0.3)).toLocaleString('ch') + " CHF";
  document.querySelector("#feeComb8").innerHTML = "Total des frais " + Math.round((parseInt(document.querySelector("#annual_revenue_field").value)/100*value8 + parseInt(document.querySelector("#expected_youloop_field").value/100*(value8 *0.3))) * 100 / valueCombo) + " %";
  document.querySelector("#feeComb8BIS").innerHTML = (parseInt(document.querySelector("#annual_revenue_field").value)/100*value8 + parseInt(document.querySelector("#expected_youloop_field").value/100*(value8 *0.3))).toLocaleString('ch') + " CHF";
  /* ----- 9eme slider ------- */
  document.querySelector("#feeBase9").innerHTML = "Frais de base " + (value9*0) + " %";
  document.querySelector("#feeBase9BIS").innerHTML = ((document.querySelector("#annual_revenue_field").value * 0) * value9*0).toLocaleString('ch') + " CHF";
  document.querySelector("#feeYL9").innerHTML = "Frais de Youloop " + value9 + " %";
  document.querySelector("#feeYL9BIS").innerHTML = ((document.querySelector("#expected_youloop_field").value/100) * value9).toLocaleString('ch') + " CHF";
  document.querySelector("#feeComb9").innerHTML = "Total des frais " + Math.round((parseInt(document.querySelector("#annual_revenue_field").value)/100*value9 * 0 + parseInt(document.querySelector("#expected_youloop_field").value/100*(value9))) * 100 / valueCombo) + " %";
  document.querySelector("#feeComb9BIS").innerHTML = (parseInt(document.querySelector("#annual_revenue_field").value)/100*value9*0 + parseInt(document.querySelector("#expected_youloop_field").value/100*value9)).toLocaleString('ch') + " CHF";
  /* ----- Frais Total ------- */
  document.querySelector("#feeBaseTot").innerHTML = "Frais de base " + (parseInt(value1) + parseInt(value2) + parseInt(value3) + parseInt(value4) + parseInt(value5) + parseInt(value6) + parseInt(value7) + parseInt(value8)) + " %";
  document.querySelector("#feeBaseTotBIS").innerHTML = ((document.querySelector("#annual_revenue_field").value/100) * (parseInt(value1) + parseInt(value2) + parseInt(value3) + parseInt(value4) + parseInt(value5) + parseInt(value6) + parseInt(value7) + parseInt(value8))).toLocaleString('ch') + " CHF";
  document.querySelector("#feeYLTot").innerHTML = "Frais de Youloop " + (value1 + value2*0.3 + value3*0 + value4*0.5 + value5 + value6*2 + value7 + value8*0.3 + value9).toFixed(1) + " %";
  document.querySelector("#feeYLTotBIS").innerHTML = ((Ray/100 * value1)+(Ray/100 * value2*0.3)+(Ray/100 * value3*0)+(Ray/100 * value4*0.5)+(Ray/100 * value5)+(Ray/100 * value6*2)+(Ray/100 * value7)+(Ray/100 * value8*0.3)+(Ray/100 * value9)).toLocaleString('ch') + " CHF";
  document.querySelector("#feeCombTot").innerHTML = "Total des frais " + Math.round((((document.querySelector("#annual_revenue_field").value) * valueTot) + ((document.querySelector("#expected_youloop_field").value) * valueYLTot)) / valueCombo) + " %";
  document.querySelector("#feeCombTotBIS").innerHTML = (parseInt(document.querySelector("#annual_revenue_field").value)/100*valueTot + parseInt(document.querySelector("#expected_youloop_field").value/100*valueYLTot)).toLocaleString('ch') + " CHF";
  /* ----- Benefices ------- */
  document.querySelector("#feeBaseBenef").innerHTML = "Bénéfices sans Youloop " + (100 - valueTot).toFixed(1) + " %";
  document.querySelector("#feeBaseBenefBIS").innerHTML = Math.round(parseInt(document.querySelector("#annual_revenue_field").value) - ((valueTot / 100) * parseInt(document.querySelector("#annual_revenue_field").value))).toLocaleString('ch')  + " CHF";
  document.querySelector("#feeYLBenef").innerHTML = "Bénéfices de Youloop " + (100 - valueYLTot).toFixed(1) + " %";
  document.querySelector("#feeYLBenefBIS").innerHTML = (parseInt(document.querySelector("#expected_youloop_field").value) - ((document.querySelector("#expected_youloop_field").value/100) * valueYLTot)).toLocaleString('ch') + " CHF";
  document.querySelector("#feeCombBenef").innerHTML = "Bénéfices avec Youloop " + ((((100 - valueTot)*100000000 / revenueAnnuel)+((100 - valueYLTot)/100*revenueAnnuelYouLoop))*100/ valueCombo).toFixed(1)  + " %";
  document.querySelector("#feeCombBenefBIS").innerHTML = (parseInt((document.querySelector("#annual_revenue_field").value) - ((valueTot / 100) * parseInt(document.querySelector("#annual_revenue_field").value))) + parseInt((document.querySelector("#expected_youloop_field").value) - ((document.querySelector("#expected_youloop_field").value/100) * valueYLTot))).toLocaleString('ch') + " CHF";
    /* ----- Total slider ------- */
  document.querySelector("#formControlRangeTot").value = parseInt(parseInt(value1) + parseInt(value2) + parseInt(value3) + parseInt(value4) + parseInt(value5) + parseInt(value6) + parseInt(value7) + parseInt(value8));
  document.querySelector("#totalpercent").innerHTML = parseInt(parseInt(value1) + parseInt(value2) + parseInt(value3) + parseInt(value4) + parseInt(value5) + parseInt(value6) + parseInt(value7) + parseInt(value8)) + " %";

  if (valueTot <= 100){
    document.querySelector("#totalpercent").style.color = "#B2FAAF";
  } else if (valueTot > 100){
    document.querySelector("#totalpercent").style.color = "red";
  }

  if (((((100 - valueTot)*100000000 / revenueAnnuel)+((100 - valueYLTot)/100*revenueAnnuelYouLoop))*100/ valueCombo) < 0) {
    benefice = "pertes";
    document.querySelector("#feeCombBenef").style.color = "red";
  } else if (((((100 - valueTot)*100000000 / revenueAnnuel)+((100 - valueYLTot)/100*revenueAnnuelYouLoop))*100/ valueCombo) == 0) {
    document.querySelector("#feeCombBenef").style.color = "black";
    benefice = "bénéfices";
  } else if (((((100 - valueTot)*100000000 / revenueAnnuel)+((100 - valueYLTot)/100*revenueAnnuelYouLoop))*100/ valueCombo) > 0) {
    document.querySelector("#feeCombBenef").style.color = "green";
    benefice = "bénéfices";
  }
}
function caclFrais1(){
  ((100 - valueTot)*100000000 / revenueAnnuel)
}

calculTotal();


