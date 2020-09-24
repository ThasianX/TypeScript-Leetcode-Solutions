function numUniqueEmails(emails: string[]): number {
  let uniqueEmails = new Set<string>();

  for(let email of emails) {
    let parsedEmail = "";
    let skipToDomain = false;
    
    for(let i = 0; i < email.length; i++) {
      let c = email.charAt(i);

      if(c === "@") {
        parsedEmail += email.substring(i);
        break;
      } else if(!skipToDomain && c !== ".") {
        if(c === "+") {
          skipToDomain = true;
        } else {
          parsedEmail += c;
        }
      }
    }

    uniqueEmails.add(parsedEmail);
  }

  return uniqueEmails.size;
};
