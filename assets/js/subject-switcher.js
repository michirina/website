// subject-switcher.js

/**
 * Gestisce il cambio di materia nell'Area Tecnica
 */
document.addEventListener('DOMContentLoaded', function() {
    // Gestione click sui link delle materie
    const subjectLinks = document.querySelectorAll('.tech-subject-link');
    
    subjectLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Rimuovi 'active' da tutti i link
            subjectLinks.forEach(l => l.classList.remove('active'));
            
            // Aggiungi 'active' al link corrente
            this.classList.add('active');
            
            // Ottieni la materia selezionata
            const subject = this.getAttribute('data-subject');
            
            // Nascondi tutte le sezioni
            document.querySelectorAll('.tech-subject-section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Mostra la sezione della materia selezionata
            document.getElementById(subject).classList.add('active');
        });
    });
    
    // Attiva la prima materia per default
    const firstSubject = document.querySelector('.tech-subject-link.active');
    if (firstSubject) {
        const subjectId = firstSubject.getAttribute('data-subject');
        document.getElementById(subjectId).classList.add('active');
    }
});