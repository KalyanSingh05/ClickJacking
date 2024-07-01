function showLabInfo() {
  const labInfo = "Welcome to the Clickjacking Lab!\n\nObjective: Demonstrate a clickjacking attack on a web application's login form.\n\nInstructions:\n1. Open the target page.\n2. Open the attack page.\n3. Observe the clickjacking effect.\n\nMitigation: Use the X-Frame-Options header and Content Security Policy.";
  // alert(labInfo);
  document.getElementById('displayInfo').style.display = 'block';
  document.getElementById('displayInfoText').innerText = labInfo;
}

function showMitigations() {
  const mitigations = `Mitigations\n
    1. Use the X-Frame-Options header:
      - DENY: Prevents any domain from framing the content.
      - SAMEORIGIN: Allows the content to be framed only by the same site.\n
    2. Implement Content Security Policy (CSP) with frame-ancestors directive:
      - frame-ancestors 'none';
      - frame-ancestors 'self';\n
    3. Use JavaScript frame-busting:
      if (top !== self) { top.location = self.location; }\n
    4. Set SameSite cookie attribute to mitigate CSRF:
      - Set-Cookie: mycookie=value; SameSite=Strict;`;
  // alert(mitigations);
  document.getElementById('displayInfo').style.display = 'block';
  document.getElementById('displayInfoText').innerText = mitigations;
}

function hideInfo() {
  document.getElementById('displayInfo').style.display = 'none';
}
//displayInfoText

document.getElementById("attackButton").addEventListener("click", function () {
  document.getElementById("innerPage").contentWindow.document.getElementById("clickjacking").click();
});