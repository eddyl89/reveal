function verifierReponses() {
    const reponses = ["pomme", "hibou", "chat", "éléphant", "carotte", "vélo"];
    let correct = true;

    for (let i = 1; i <= 6; i++) {
        const reponseUtil = document.getElementById(`reponse${i}`).value.toLowerCase();
        if (reponseUtil !== reponses[i - 1]) {
            correct = false;
            break;
        }
    }

    const resultat = document.getElementById("resultat");
    if (correct) {
        resultat.textContent = "Félicitations ! Vous avez découvert le genre : Garçon/Fille";
    } else {
        resultat.textContent = "Désolé, une ou plusieurs réponses sont incorrectes. Réessayez.";
    }
}