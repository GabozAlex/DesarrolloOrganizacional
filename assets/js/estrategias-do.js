$(document).ready(function() {
    const $strategyTabs = $('.strategy-tab');
    const $strategyDetails = $('#strategy-details');
    const $strategyIntro = $('.strategy-intro');
    const $comparisonTableBody = $('#comparison table tbody');

    // Data for strategies (can come from a JSON or API in a real application)
    const strategiesData = {
        'procesos-humanos': {
            title: 'Estrategias de Procesos Humanos',
            description: 'Estas estrategias se centran en las relaciones interpersonales, la comunicación, la toma de decisiones y el liderazgo dentro de la organización. Su objetivo es mejorar la interacción humana y el funcionamiento de los grupos.',
            details: `
                <h3>Coaching y Asesoramiento</h3>
                <p>El coaching es un proceso de acompañamiento individual o grupal para desarrollar habilidades, competencias y el rendimiento. El asesoramiento puede ser más directivo, ofreciendo soluciones específicas.</p>
                <h4>Aplicación:</h4>
                <ul>
                    <li>Mejora del liderazgo y habilidades de comunicación.</li>
                    <li>Desarrollo de competencias específicas en empleados.</li>
                    <li>Manejo de conflictos y mediación.</li>
                </ul>
                <div class="image featured"><img src="images/estrategias/coaching.jpg" alt="Coaching y Asesoramiento"></div>

                <h3>Team Building (Construcción de Equipos)</h3>
                <p>Conjunto de actividades diseñadas para mejorar la cohesión, la comunicación, la colaboración y el rendimiento de los equipos de trabajo. Puede ir desde actividades recreativas hasta talleres de resolución de problemas.</p>
                <h4>Aplicación:</h4>
                <ul>
                    <li>Equipos nuevos o con bajo rendimiento.</li>
                    <li>Mejora de la moral y la confianza del equipo.</li>
                    <li>Clarificación de roles y objetivos.</li>
                </ul>
                <div class="image featured"><img src="images/estrategias/team-building.jpg" alt="Team Building"></div>

                <h3>Procesos de Consulta</h3>
                <p>Implica la colaboración entre un consultor (interno o externo) y los miembros de la organización para diagnosticar problemas y desarrollar soluciones. Se centra en ayudar a la organización a ayudarse a sí misma.</p>
                <h4>Aplicación:</h4>
                <ul>
                    <li>Identificación de problemas organizacionales.</li>
                    <li>Facilitación de reuniones y talleres estratégicos.</li>
                    <li>Desarrollo de planes de acción con participación de los empleados.</li>
                </ul>
                <div class="image featured"><img src="images/estrategias/consulta.jpg" alt="Procesos de Consulta"></div>
            `
        },
        'tecnoestructurales': {
            title: 'Estrategias Tecnoestructurales',
            description: 'Estas estrategias se enfocan en el diseño de la organización, la tecnología utilizada y la estructura formal. Buscan optimizar la eficiencia y la efectividad a través de cambios en los sistemas y procesos de trabajo.',
            details: `
                <h3>Diseño Organizacional</h3>
                <p>Reestructuración de los departamentos, roles, jerarquías y líneas de autoridad para mejorar el flujo de trabajo y la toma de decisiones.</p>
                <h4>Aplicación:</h4>
                <ul>
                    <li>Fusiones y adquisiciones.</li>
                    <li>Expansión o contracción de la empresa.</li>
                    <li>Mejora de la eficiencia operativa.</li>
                </ul>
                <div class="image featured"><img src="images/estrategias/diseno-org.jpg" alt="Diseño Organizacional"></div>

                <h3>Reingeniería de Procesos</h3>
                <p>Análisis y rediseño radical de los procesos de negocio para lograr mejoras drásticas en costos, calidad, servicio y rapidez.</p>
                <h4>Aplicación:</h4>
                <ul>
                    <li>Cuando los procesos actuales son ineficientes o obsoletos.</li>
                    <li>Para lograr una ventaja competitiva significativa.</li>
                    <li>Reducción de costos operativos.</li>
                </ul>
                <div class="image featured"><img src="images/estrategias/reingenieria.jpg" alt="Reingeniería de Procesos"></div>

                <h3>Sistemas de Trabajo de Alto Rendimiento (HRWS)</h3>
                <p>Diseño de sistemas donde los empleados tienen mayor autonomía, responsabilidad y están más involucrados en la toma de decisiones, aprovechando sus habilidades y conocimientos.</p>
                <h4>Aplicación:</h4>
                <ul>
                    <li>Fomento de la innovación y la proactividad.</li>
                    <li>Mejora del compromiso y la satisfacción del empleado.</li>
                    <li>Aumento de la productividad y la calidad.</li>
                </ul>
                <div class="image featured"><img src="images/estrategias/hrws.jpg" alt="Sistemas de Trabajo de Alto Rendimiento"></div>
            `
        },
        'recursos-humanos': {
            title: 'Estrategias de Recursos Humanos',
            description: 'Estas estrategias se enfocan en la gestión del talento, el desarrollo de habilidades, el sistema de recompensas y la gestión del rendimiento para asegurar que la organización tenga las personas adecuadas con las capacidades necesarias.',
            details: `
                <h3>Gestión del Desempeño y Feedback</h3>
                <p>Implementación de sistemas para evaluar el rendimiento de los empleados, proporcionar retroalimentación constructiva y establecer objetivos de desarrollo.</p>
                <h4>Aplicación:</h4>
                <ul>
                    <li>Mejora del rendimiento individual y grupal.</li>
                    <li>Desarrollo profesional de los empleados.</li>
                    <li>Alineación de objetivos individuales con los organizacionales.</li>
                </ul>
                <div class="image featured"><img src="images/estrategias/desempeno.jpg" alt="Gestión del Desempeño"></div>

                <h3>Sistemas de Recompensas y Reconocimiento</h3>
                <p>Diseño de sistemas de compensación, beneficios y reconocimiento que motiven a los empleados, refuercen los comportamientos deseados y mejoren la retención.</p>
                <h4>Aplicación:</h4>
                <ul>
                    <li>Aumento de la motivación y el compromiso.</li>
                    <li>Reducción de la rotación de personal.</li>
                    <li>Atracción de talento calificado.</li>
                </ul>
                <div class="image featured"><img src="images/estrategias/recompensas.jpg" alt="Recompensas y Reconocimiento"></div>

                <h3>Desarrollo de Carrera y Capacitación</h3>
                <p>Programas para identificar el potencial de los empleados, ofrecer oportunidades de crecimiento profesional y desarrollar las habilidades necesarias para roles futuros.</p>
                <h4>Aplicación:</h4>
                <ul>
                    <li>Retención de talento clave.</li>
                    <li>Asegurar la sucesión de liderazgo.</li>
                    <li>Adaptación a nuevas tecnologías o cambios en el mercado.</li>
                </ul>
                <div class="image featured"><img src="images/estrategias/desarrollo-carrera.jpg" alt="Desarrollo de Carrera y Capacitación"></div>
            `
        },
        'intervencion-estrategica': {
            title: 'Intervención Estratégica',
            description: 'Estas estrategias involucran cambios a gran escala que afectan la dirección, misión, visión y objetivos generales de la organización, a menudo en respuesta a cambios en el entorno externo.',
            details: `
                <h3>Gestión del Cambio a Gran Escala</h3>
                <p>Procesos planificados para transformar fundamentalmente la organización, abarcando múltiples niveles y sistemas, a menudo impulsados por fusiones, reestructuraciones o cambios de modelo de negocio.</p>
                <h4>Aplicación:</h4>
                <ul>
                    <li>Transformaciones digitales.</li>
                    <li>Reorientación estratégica mayor.</li>
                    <li>Integración post-fusión/adquisición.</li>
                </ul>
                <div class="image featured"><img src="images/estrategias/cambio-gran-escala.jpg" alt="Gestión del Cambio a Gran Escala"></div>

                <h3>Planificación Estratégica Participativa</h3>
                <p>Involucrar a los miembros clave de la organización en el proceso de definir la visión, misión, valores y objetivos estratégicos, fomentando el compromiso y la alineación.</p>
                <h4>Aplicación:</h4>
                <ul>
                    <li>Creación de una nueva estrategia o revisión de la actual.</li>
                    <li>Aumento del compromiso y la apropiación de la estrategia.</li>
                    <li>Desarrollo de liderazgo y capacidad de planificación.</li>
                </ul>
                <div class="image featured"><img src="images/estrategias/planificacion-estrategica.jpg" alt="Planificación Estratégica Participativa"></div>

                <h3>Desarrollo de Sistemas Abiertos</h3>
                <p>Intervenciones que ayudan a la organización a entender y gestionar su relación con el entorno externo (clientes, competidores, reguladores) para mejorar la adaptabilidad y la respuesta.</p>
                <h4>Aplicación:</h4>
                <ul>
                    <li>Adaptación a cambios en el mercado o la industria.</li>
                    <li>Mejora de la relación con stakeholders externos.</li>
                    <li>Innovación basada en las necesidades del entorno.</li>
                </ul>
                <div class="image featured"><img src="images/estrategias/sistemas-abiertos.jpg" alt="Desarrollo de Sistemas Abiertos"></div>
            `
        },
        'cultura-organizacional': {
            title: 'Estrategias de Cultura Organizacional',
            description: 'Estas estrategias se dirigen a los valores, creencias, normas y supuestos compartidos que influyen en el comportamiento de los miembros de la organización. Un cambio cultural profundo busca transformar la forma en que las personas piensan y actúan.',
            details: `
                <h3>Diagnóstico y Cambio Cultural</h3>
                <p>Evaluar la cultura actual de la organización, identificar los valores y normas deseados, y planificar intervenciones para cerrar la brecha. Implica talleres, comunicación y modelado de roles.</p>
                <h4>Aplicación:</h4>
                <ul>
                    <li>Después de fusiones o adquisiciones para integrar culturas.</li>
                    <li>Para fomentar la innovación, la agilidad o una cultura de servicio al cliente.</li>
                    <li>Cuando la cultura actual obstaculiza el rendimiento.</li>
                </ul>
                <div class="image featured"><img src="images/estrategias/cultura-cambio.jpg" alt="Diagnóstico y Cambio Cultural"></div>

                <h3>Integración de Valores</h3>
                <p>Procesos para asegurar que los valores declarados de la organización se traduzcan en comportamientos reales y sean vividos por los empleados en todos los niveles.</p>
                <h4>Aplicación:</h4>
                <ul>
                    <li>Reforzar la ética y la integridad.</li>
                    <li>Construir una marca empleadora fuerte.</li>
                    <li>Alinear la cultura con la estrategia.</li>
                </ul>
                <div class="image featured"><img src="images/estrategias/integracion-valores.jpg" alt="Integración de Valores"></div>
            `
        }
    };

    // Data for the comparison table
    const comparisonData = [
        { strategy: 'Procesos Humanos', mainFocus: 'Relaciones interpersonales, comunicación, liderazgo de grupo', interventionLevel: 'Individual, Grupal', implementationTime: 'Corto a mediano plazo' },
        { strategy: 'Tecnoestructurales', mainFocus: 'Diseño organizacional, sistemas de trabajo, tecnología', interventionLevel: 'Departamental, Organizacional', implementationTime: 'Mediano a largo plazo' },
        { strategy: 'Recursos Humanos', mainFocus: 'Gestión del talento, desarrollo de habilidades, recompensas', interventionLevel: 'Individual, Organizacional', implementationTime: 'Continuo, mediano a largo plazo' },
        { strategy: 'Intervención Estratégica', mainFocus: 'Misión, visión, objetivos, relación con el entorno', interventionLevel: 'Organización completa', implementationTime: 'Largo plazo, transformacional' },
        { strategy: 'Cultura Organizacional', mainFocus: 'Valores, creencias, normas compartidas', interventionLevel: 'Organización completa', implementationTime: 'Largo plazo, complejo' }
    ];

    // Function to load strategy content
    function loadStrategyContent(strategyKey) {
        const data = strategiesData[strategyKey];
        if (data) {
            $strategyIntro.hide(); // Hide the intro message
            $strategyDetails.html(data.details);
            $strategyDetails.fadeIn(); // Show content with a fade in effect
        } else {
            // If no data, show intro or an error message
            $strategyIntro.show();
            $strategyDetails.empty(); // Clear previous content
        }
    }

    // Function to populate the comparison table
    function populateComparisonTable() {
        let tableRows = '';
        comparisonData.forEach(item => {
            tableRows += `
                <tr>
                    <td>${item.strategy}</td>
                    <td>${item.mainFocus}</td>
                    <td>${item.interventionLevel}</td>
                    <td>${item.implementationTime}</td>
                </tr>
            `;
        });
        $comparisonTableBody.html(tableRows);
    }

    // Click handler for strategy tabs
    $strategyTabs.on('click', function() {
        const $this = $(this);
        $strategyTabs.removeClass('active'); // Remove 'active' class from all tabs
        $this.addClass('active'); // Add 'active' class to the clicked tab

        const strategyKey = $this.data('strategy'); // Get the strategy key
        loadStrategyContent(strategyKey); // Load dynamic content
    });

    // Initialization on page load
    // 1. Load content for the first strategy by default
    if ($strategyTabs.length > 0) {
        $strategyTabs.eq(0).click(); // Simulate a click on the first tab to show its content
    }

    // 2. Populate the comparison table
    populateComparisonTable();
});