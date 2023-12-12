function scuberGreetingForFeet(Distance ){
  // Write your code here!
  if (Distance<=400){return "This one is on me!"}else if(Distance >2000 && Distance <=2500){return "I will gladly take your thirty bucks."}else if (Distance>2500){return "No can do."}
}

function ternaryCheckCity(city){
  // Write your code here!
  return city === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(money){
  // Write your code here!
  switch (money){
    case "generous":
      return "Thank you so much.";
      break;
      case "not as generous":
        return"Thank you.";
        break;
        default:
          return "Bye.";

  }
}