// historia-do.js
// Interactividad para la historia del DO

$(document).ready(function() {
    // Datos de las eras históricas
    const eras = {
        "pre-1940": {
            title: "Antecedentes y Orígenes (Pre-1940s)",
            description: "Aunque el término 'Desarrollo Organizacional' no se popularizó hasta más tarde, sus raíces se encuentran en movimientos y teorías de principios del siglo XX.",
            highlights: [
                "La Revolución Industrial y la Administración Científica (Taylorismo): Enfoque en la eficiencia de la producción pero con deshumanización del trabajo.",
                "El Movimiento de Relaciones Humanas (1920-1930): Estudios de Hawthorne revelaron la importancia de los factores sociales y psicológicos en la productividad.",
                "Kurt Lewin: Desarrolló la 'Teoría de Campo' y el concepto de 'Investigación-Acción', base metodológica del DO."
            ],
            impact: "Establecieron las bases para entender que las organizaciones son sistemas sociales complejos, no solo máquinas de producción."
        },
        "1940-1950": {
            title: "Nacimiento y Primeros Pasos del DO (Décadas de 1940 y 1950)",
            description: "El DO como disciplina formal comenzó a tomar forma después de la Segunda Guerra Mundial.",
            highlights: [
                "Laboratorios Nacionales de Capacitación (NTL): Fundados en 1947, desarrollaron los T-Groups (Grupos de Sensibilización).",
                "Los T-Groups demostraron el poder de la retroalimentación y la dinámica grupal para el aprendizaje y el cambio.",
                "Primeras aplicaciones en organizaciones como Esso Standard Oil para resolver problemas de conflictos y comunicación."
            ],
            impact: "Estableció el DO como campo de práctica profesional con metodologías específicas para el cambio organizacional."
        },
        "1960-1970": {
            title: "Crecimiento y Diversificación (Décadas de 1960 y 1970)",
            description: "Esta fue la década de expansión y consolidación del DO con nuevas intervenciones y teorías.",
            highlights: [
                "Nuevas técnicas: Retroalimentación por Encuesta, Desarrollo de Equipos, Consulta de Procesos, Enfoques Sociotécnicos.",
                "Influencia de teorías clave: Douglas McGregor (Teoría X y Y), Robert Blake y Jane Mouton (Grid Gerencial).",
                "Reconocimiento de la cultura organizacional como factor crítico para el cambio y el desempeño."
            ],
            impact: "El DO se diversificó más allá de los T-Groups para abordar múltiples aspectos del funcionamiento organizacional."
        },
        "1980-1990": {
            title: "Maduración y Desafíos (Décadas de 1980 y 1990)",
            description: "El DO se hizo más estratégico y enfrentó nuevos desafíos en un mundo en cambio.",
            highlights: [
                "Enfoque Estratégico del DO: Alineación con objetivos organizacionales.",
                "Influencia de la Calidad Total (TQM) y Reingeniería de Procesos.",
                "Desafíos de globalización y tecnología exigieron mayor agilidad y adaptabilidad.",
                "Mayor profesionalización con programas académicos y certificaciones."
            ],
            impact: "El DO evolucionó para integrarse con otras disciplinas gerenciales y abordar entornos más complejos."
        },
        "2000-presente": {
            title: "DO Contemporáneo (Década de 2000 - Presente)",
            description: "El DO hoy es una disciplina dinámica que responde a los desafíos actuales.",
            highlights: [
                "Organizaciones Ágiles y Cambio Continuo: Capacidad de adaptación constante.",
                "Digitalización y Transformación: Desafíos humanos de la transformación digital.",
                "Sostenibilidad y Responsabilidad Social Corporativa (RSC).",
                "Diversidad, Equidad e Inclusión (DEI) como prioridad.",
                "Investigación Apreciativa y DO Basado en Evidencia.",
                "Enfoque en bienestar y salud mental organizacional."
            ],
            impact: "El DO se ha convertido en una disciplina holística que integra personas, procesos, tecnología y cultura para la efectividad organizacional en un mundo complejo."
        }
    };

    // Datos de figuras clave
    const figures = [
        {
            name: "Kurt Lewin",
            role: "Padre del DO",
            contribution: "Teoría de Campo, Investigación-Acción",
            image: "images/lewin.jpg"
        },
        {
            name: "Elton Mayo",
            role: "Relaciones Humanas",
            contribution: "Estudios de Hawthorne",
            image: "images/mayo.jpeg"
        },
        {
            name: "Douglas McGregor",
            role: "Teoría X y Y",
            contribution: "Teorías de motivación",
            image: "images/mcgregor.jpg"
        },
        {
            name: "Edgar Schein",
            role: "Cultura Organizacional",
            contribution: "Consulta de Procesos",
            image: "images/schein.jpg"
        },
        {
            name: "Rensis Likert",
            role: "Gestión Participativa",
            contribution: "Retroalimentación por Encuesta",
            image: "images/likert.jpg"
        }
    ];

    // Manejar clic en los puntos de la línea de tiempo
    $('.timeline-dot').click(function() {
        const era = $(this).data('era');
        
        // Actualizar navegación
        $('.timeline-dot').removeClass('active');
        $(this).addClass('active');
        
        // Cargar contenido
        loadEraContent(era);
    });

    // Cargar contenido de la era
    function loadEraContent(era) {
        const eraData = eras[era];
        
        let highlightsHtml = '<ul>';
        eraData.highlights.forEach(highlight => {
            highlightsHtml += `<li>${highlight}</li>`;
        });
        highlightsHtml += '</ul>';
        
        const html = `
            <div class="era-card">
                <h3>${eraData.title}</h3>
                <p>${eraData.description}</p>
                
                <div class="era-highlight">
                    <h4>Hitos y Desarrollos Clave</h4>
                    ${highlightsHtml}
                </div>
                
                <div class="era-highlight">
                    <h4>Impacto en el DO</h4>
                    <p>${eraData.impact}</p>
                </div>
            </div>
        `;
        
        $('.era-intro').hide();
        $('#era-details').html(html).fadeIn();
    }

    // Cargar figuras clave
    function loadFigures() {
        let figuresHtml = '';
        figures.forEach(figure => {
            figuresHtml += `
                <div class="figure-card">
                    <img src="${figure.image}" alt="${figure.name}">
                    <h4>${figure.name}</h4>
                    <p><strong>${figure.role}</strong></p>
                    <p>${figure.contribution}</p>
                </div>
            `;
        });
        
        $('#figures-container').html(figuresHtml);
    }

    // Inicializar
    loadEraContent('pre-1940');
    loadFigures();
});