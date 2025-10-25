// fases-do.js
// Interactividad para las fases del DO

$(document).ready(function() {
    // Datos de las fases
    const phases = {
        1: {
            title: "1. Diagnóstico (Evaluación Inicial / Recolección de Datos)",
            description: "Esta es la fase de comprensión. El objetivo es obtener una imagen clara y precisa de la situación actual de la organización, identificar los problemas, las áreas de mejora y las oportunidades.",
            activities: [
                "Recolección de datos: Entrevistas (individuales y grupales), encuestas, observación directa, análisis de documentos (organigramas, procedimientos, informes de rendimiento), grupos focales.",
                "Análisis de datos: Identificación de patrones, causas raíz de los problemas (por ejemplo, falta de comunicación, baja moral, procesos ineficientes, liderazgo débil, resistencia al cambio).",
                "Identificación de las necesidades de cambio: ¿Qué es lo que realmente necesita mejorar o cambiar en la organización?"
            ],
            results: "Un informe de diagnóstico detallado que describe la situación actual, los problemas identificados y las áreas clave que requieren intervención."
        },
        2: {
            title: "2. Planificación de la Intervención (Formulación de la Estrategia)",
            description: "Una vez que se ha diagnosticado la situación, esta fase se enfoca en diseñar las acciones específicas para abordar los problemas identificados y alcanzar los objetivos de mejora.",
            activities: [
                "Establecimiento de objetivos: Definir qué se espera lograr con la intervención (objetivos específicos, medibles, alcanzables, relevantes y con plazos definidos - SMART).",
                "Diseño de la estrategia de cambio: Seleccionar las intervenciones de DO más adecuadas (ej. capacitación, talleres de team building, reestructuración, desarrollo de liderazgo, mejora de procesos, implementación de nuevas tecnologías).",
                "Definición de roles y responsabilidades: Quién hará qué, cuándo y cómo.",
                "Planificación de recursos: Presupuesto, personal, tiempo necesario."
            ],
            results: "Un plan de acción detallado para el cambio, con objetivos claros, estrategias de intervención y cronogramas."
        },
        3: {
            title: "3. Implementación (Ejecución de la Intervención)",
            description: "Esta es la fase de acción, donde los planes diseñados en la fase anterior se ponen en práctica.",
            activities: [
                "Ejecución de las intervenciones planificadas: Realización de talleres, programas de capacitación, sesiones de coaching, implementación de nuevos sistemas, rediseño de estructuras, etc.",
                "Comunicación del cambio: Mantener a todos los involucrados informados sobre el progreso, los desafíos y los beneficios del cambio.",
                "Gestión de la resistencia al cambio: Abordar las preocupaciones, temores y objeciones de los empleados.",
                "Monitoreo constante: Supervisar la ejecución para identificar desviaciones o nuevos problemas."
            ],
            results: "La organización experimenta los cambios planificados y las nuevas prácticas comienzan a ser adoptadas."
        },
        4: {
            title: "4. Evaluación (Seguimiento y Medición)",
            description: "En esta fase se evalúa la efectividad de las intervenciones realizadas. ¿Se lograron los objetivos? ¿Hubo un impacto positivo?",
            activities: [
                "Recolección de datos post-intervención: Utilizar métodos similares a la fase de diagnóstico para medir los cambios (ej. nuevas encuestas de clima, entrevistas, indicadores de rendimiento).",
                "Comparación de resultados: Comparar los datos actuales con los datos del diagnóstico inicial para evaluar el progreso.",
                "Análisis de la eficacia: Determinar si las intervenciones fueron exitosas en resolver los problemas y alcanzar los objetivos.",
                "Identificación de lecciones aprendidas: Qué funcionó bien, qué no, y por qué."
            ],
            results: "Un informe de evaluación que muestra el impacto del DO, el logro de los objetivos y las áreas que aún requieren atención."
        },
        5: {
            title: "5. Reforzamiento (Institucionalización y Sostenibilidad)",
            description: "Esta fase final busca asegurar que los cambios sean duraderos y se integren en la cultura y los procesos cotidianos de la organización, evitando que sean un esfuerzo temporal que se diluya.",
            activities: [
                "Normalización de nuevas prácticas: Integrar los cambios en políticas, procedimientos, sistemas de recompensa y normas culturales.",
                "Desarrollo de liderazgo: Capacitar a los líderes para que mantengan y promuevan los nuevos comportamientos y procesos.",
                "Comunicación continua: Reforzar los beneficios del cambio y el nuevo rumbo de la organización.",
                "Monitoreo a largo plazo: Establecer mecanismos para seguir monitoreando el desempeño y la cultura para asegurar la sostenibilidad del cambio.",
                "Celebración de éxitos: Reconocer y recompensar los esfuerzos y logros para mantener la motivación."
            ],
            results: "Los cambios se arraigan en la organización, se convierten en parte de su ADN, y la organización desarrolla una mayor capacidad para la adaptación y la mejora continua."
        }
    };

    // Manejar clic en las fases
    $('#phase-nav li').click(function() {
        const phaseNum = $(this).data('phase');
        
        // Actualizar navegación
        $('#phase-nav li').removeClass('active');
        $(this).addClass('active');
        
        // Cargar contenido
        loadPhaseContent(phaseNum);
    });

    // Cargar contenido de la fase
    function loadPhaseContent(phaseNum) {
        const phase = phases[phaseNum];
        
        let activitiesHtml = '<ul>';
        phase.activities.forEach(activity => {
            activitiesHtml += `<li>${activity}</li>`;
        });
        activitiesHtml += '</ul>';
        
        const html = `
            <div class="phase-card">
                <h3>${phase.title}</h3>
                <p>${phase.description}</p>
                
                <div class="phase-highlight">
                    <h4>Actividades Clave</h4>
                    ${activitiesHtml}
                </div>
                
                <div class="phase-highlight">
                    <h4>Resultados Esperados</h4>
                    <p>${phase.results}</p>
                </div>
            </div>
        `;
        
        $('.phase-intro').hide();
        $('#phase-details').html(html).fadeIn();
    }

    // Cargar primera fase por defecto
    loadPhaseContent(1);
    $('#phase-nav li[data-phase="1"]').addClass('active');
});