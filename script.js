const questions = [
    {
        question: "¿Qué propone el dualismo sustancial de Descartes?",
        options: [
            "Que existe una sola sustancia, la física.",
            "Que existen dos sustancias: una mental y una física.",
            "Que la mente es una ilusión."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué es el 'proto-self' según Damasio?",
        options: [
            "Una colección de dispositivos encefálicos que gobiernan la vida del organismo.",
            "La parte consciente del cerebro que controla las emociones.",
            "Un concepto filosófico sin base biológica."
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué argumento a favor del dualismo sostiene que la mente tiene propiedades irreductibles a lo físico?",
        options: [
            "Argumento religioso.",
            "Argumento de la introspección.",
            "Argumento de la irreductibilidad."
        ],
        correctAnswer: 2
    },
    {
        question: "¿Qué es la 'consciencia nuclear' según Damasio?",
        options: [
            "La forma más compleja de consciencia, que incluye el self autobiográfico.",
            "La forma más sencilla de consciencia, que proporciona una sensación de self en el momento presente.",
            "Un estado de consciencia que solo ocurre durante el sueño."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué plantea el materialismo eliminativo?",
        options: [
            "Que los estados mentales no existen.",
            "Que los estados mentales son idénticos a los estados físicos.",
            "Que la mente es una sustancia separada del cuerpo."
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué es el 'ello' en el esquema del psicoanálisis de Freud?",
        options: [
            "La instancia psíquica más antigua, que contiene lo heredado.",
            "La parte consciente de la mente que media entre el ello y el superyó.",
            "La instancia que representa la moral y las normas sociales."
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué es el 'self autobiográfico' según Damasio?",
        options: [
            "Una entidad efímera que surge de la consciencia nuclear.",
            "Una construcción compleja que sitúa al individuo en su historia personal.",
            "Un concepto filosófico sin base biológica."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué argumento en contra del dualismo sostiene que la mente depende del sistema nervioso?",
        options: [
            "Argumento de la simplicidad.",
            "Argumento de la dependencia nerviosa.",
            "Argumento de la historia evolutiva."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué es el 'funcionalismo' en filosofía de la mente?",
        options: [
            "La teoría que sostiene que los estados mentales se definen por su función causal.",
            "La teoría que niega la existencia de los estados mentales.",
            "La teoría que reduce los estados mentales a estados físicos."
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué es el 'superyó' en el esquema del psicoanálisis de Freud?",
        options: [
            "La instancia que representa los deseos inconscientes.",
            "La instancia que media entre el ello y el mundo exterior.",
            "La instancia que proviene de la crianza y representa las normas sociales."
        ],
        correctAnswer: 2
    },
    {
        question: "¿Qué es la 'consciencia ampliada' según Damasio?",
        options: [
            "La forma más sencilla de consciencia, que proporciona una sensación de self en el momento presente.",
            "La forma más compleja de consciencia, que sitúa al individuo en su historia personal.",
            "Un estado de consciencia que solo ocurre durante el sueño."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué es el 'dualismo de las propiedades emergentes'?",
        options: [
            "La teoría que sostiene que las propiedades mentales emergen de la materia compleja.",
            "La teoría que niega la existencia de propiedades mentales.",
            "La teoría que sostiene que las propiedades mentales son independientes de la materia."
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué es el 'argumento de la simplicidad' en contra del dualismo?",
        options: [
            "Que el dualismo postula dos sustancias, mientras que el materialismo postula una.",
            "Que el dualismo no puede explicar la dependencia de la mente del sistema nervioso.",
            "Que el dualismo no tiene base científica."
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué es el 'conductismo filosófico'?",
        options: [
            "La teoría que define los estados mentales en términos de conductas posibles.",
            "La teoría que niega la existencia de los estados mentales.",
            "La teoría que reduce los estados mentales a estados físicos."
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué es el 'argumento de la historia evolutiva' en contra del dualismo?",
        options: [
            "Que la especie humana es el resultado de un proceso puramente físico.",
            "Que el dualismo no puede explicar la dependencia de la mente del sistema nervioso.",
            "Que el dualismo postula dos sustancias, mientras que el materialismo postula una."
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué es el 'monismo anómalo' de Davidson?",
        options: [
            "La teoría que sostiene que todos los sucesos mentales son sucesos físicos, pero no hay leyes que los relacionen.",
            "La teoría que niega la existencia de los estados mentales.",
            "La teoría que sostiene que los estados mentales son independientes de los estados físicos."
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué es el 'argumento de la introspección' a favor del dualismo?",
        options: [
            "Que la introspección revela estados mentales que no pueden ser explicados físicamente.",
            "Que la introspección es un método científico válido.",
            "Que la introspección no es confiable."
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué es el 'argumento parapsicológico' a favor del dualismo?",
        options: [
            "Que existen fenómenos mentales que no pueden ser explicados físicamente.",
            "Que la religión sostiene la existencia del alma.",
            "Que la mente depende del sistema nervioso."
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué es el 'funcionalismo de la caja negra'?",
        options: [
            "La teoría que sostiene que el cerebro es una incógnita y no satisface nuestra curiosidad intelectual.",
            "La teoría que define los estados mentales en términos de conductas posibles.",
            "La teoría que reduce los estados mentales a estados físicos."
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué es el 'argumento de la impotencia explicativa' en contra del dualismo?",
        options: [
            "Que el dualismo no tiene una teoría minuciosa sobre la materia mental.",
            "Que el dualismo postula dos sustancias, mientras que el materialismo postula una.",
            "Que el dualismo no puede explicar la dependencia de la mente del sistema nervioso."
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué es el 'dualismo de las propiedades elementales'?",
        options: [
            "La teoría que sostiene que las propiedades mentales han estado presentes desde el comienzo del universo.",
            "La teoría que niega la existencia de propiedades mentales.",
            "La teoría que sostiene que las propiedades mentales emergen de la materia compleja."
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué es el 'argumento de la intencionalidad' en filosofía de la mente?",
        options: [
            "Que los estados mentales tienen contenido intencional.",
            "Que los estados mentales son ilusiones.",
            "Que los estados mentales son idénticos a los estados físicos."
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué es el 'argumento de la circularidad' en contra del conductismo filosófico?",
        options: [
            "Que para definir un estado mental, se necesita reintroducir otro término mental.",
            "Que el conductismo no puede explicar la dependencia de la mente del sistema nervioso.",
            "Que el conductismo postula dos sustancias, mientras que el materialismo postula una."
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué es el 'argumento de la navaja de Occam' en contra del dualismo?",
        options: [
            "Que en igualdad de condiciones, debe preferirse la hipótesis más simple.",
            "Que el dualismo no puede explicar la dependencia de la mente del sistema nervioso.",
            "Que el dualismo postula dos sustancias, mientras que el materialismo postula una."
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué es el 'argumento de la insuficiencia explicativa' a favor del materialismo eliminativo?",
        options: [
            "Que la psicología popular fracasa en explicar ciertos fenómenos.",
            "Que el materialismo eliminativo no tiene base científica.",
            "Que el materialismo eliminativo postula dos sustancias, mientras que el dualismo postula una."
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué es el 'argumento de la contradicción' en contra del materialismo eliminativo?",
        options: [
            "Que afirmar que los estados mentales no existen es una creencia.",
            "Que el materialismo eliminativo no tiene base científica.",
            "Que el materialismo eliminativo postula dos sustancias, mientras que el dualismo postula una."
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué es el 'argumento de la historia conceptual' a favor del materialismo eliminativo?",
        options: [
            "Que muchas teorías primitivas han sido reemplazadas por otras más nuevas.",
            "Que el materialismo eliminativo no tiene base científica.",
            "Que el materialismo eliminativo postula dos sustancias, mientras que el dualismo postula una."
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué es el 'argumento de la introspección' en contra del materialismo eliminativo?",
        options: [
            "Que la introspección revela estados mentales.",
            "Que el materialismo eliminativo no tiene base científica.",
            "Que el materialismo eliminativo postula dos sustancias, mientras que el dualismo postula una."
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué es el 'argumento de la concepción alarmista' en contra del materialismo eliminativo?",
        options: [
            "Que exagera los defectos de la psicología popular.",
            "Que el materialismo eliminativo no tiene base científica.",
            "Que el materialismo eliminativo postula dos sustancias, mientras que el dualismo postula una."
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué es el 'argumento de la ventaja del materialismo eliminativo' frente al materialismo reduccionista?",
        options: [
            "Que no busca correspondencias interteóricas que no existen.",
            "Que el materialismo eliminativo no tiene base científica.",
            "Que el materialismo eliminativo postula dos sustancias, mientras que el dualismo postula una."
        ],
        correctAnswer: 0
    },
    {     
        question: "¿Qué es la 'consciencia nuclear' según Damasio?",
        options: [
            "La forma más compleja de consciencia, que incluye el self autobiográfico.",
            "La forma más sencilla de consciencia, que proporciona una sensación de self en el momento presente.",
            "Un estado de consciencia que solo ocurre durante el sueño."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué es el 'proto-self' según Damasio?",
        options: [
            "La parte consciente del cerebro que controla las emociones.",
            "Una colección de dispositivos encefálicos que gobiernan la vida del organismo.",
            "Un concepto filosófico sin base biológica."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué es la 'intencionalidad' en la fenomenología?",
        options: [
            "La capacidad de la mente para procesar información.",
            "La direccionalidad de la conciencia hacia un objeto.",
            "La relación entre la mente y el cerebro."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué propone la 'teoría enactiva' de la percepción?",
        options: [
            "Que la percepción es una representación interna del mundo.",
            "Que la percepción es una implicación corporal directa con el mundo.",
            "Que la percepción es un proceso pasivo de recepción de información."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué es la 'autoconciencia pre-reflexiva' según los fenomenólogos?",
        options: [
            "Un estado de conciencia que requiere reflexión y análisis.",
            "Una forma de autoconciencia que es intrínseca a la experiencia consciente.",
            "Un proceso de introspección que convierte la experiencia en un objeto."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué es la 'intencionalidad de horizonte' según Husserl?",
        options: [
            "La capacidad de la mente para representar objetos ausentes.",
            "La relación entre la mente y el cerebro.",
            "La capacidad de la conciencia para trascender el perfil presente de un objeto."
        ],
        correctAnswer: 2
    },
    {
        question: "¿Qué es la 'teoría del marcador somático' según Damasio?",
        options: [
            "Una teoría que explica cómo las emociones influyen en la toma de decisiones.",
            "Una teoría que reduce las emociones a procesos neuronales.",
            "Una teoría que niega la influencia de las emociones en la racionalidad."
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué es la 'intencionalidad' según Brentano?",
        options: [
            "La capacidad de la mente para procesar información.",
            "La direccionalidad de los fenómenos mentales hacia un objeto.",
            "La relación entre la mente y el cerebro."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué es la 'conciencia ampliada' según Damasio?",
        options: [
            "La forma más sencilla de consciencia, que proporciona una sensación de self en el momento presente.",
            "La forma más compleja de consciencia, que sitúa al individuo en su historia personal.",
            "Un estado de consciencia que solo ocurre durante el sueño."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué es la 'intencionalidad' en la filosofía de Husserl?",
        options: [
            "La capacidad de la mente para procesar información.",
            "La direccionalidad de la conciencia hacia un objeto.",
            "La relación entre la mente y el cerebro."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué es la 'teoría enactiva' de la percepción según Alva Noë?",
        options: [
            "Que la percepción es una representación interna del mundo.",
            "Que la percepción es una implicación corporal directa con el mundo.",
            "Que la percepción es un proceso pasivo de recepción de información."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué es la 'autoconciencia reflexiva' según los fenomenólogos?",
        options: [
            "Un estado de conciencia que requiere reflexión y análisis.",
            "Una forma de autoconciencia que es intrínseca a la experiencia consciente.",
            "Un proceso de introspección que convierte la experiencia en un objeto."
        ],
        correctAnswer: 2
    },
    {
        question: "¿Qué es la 'intencionalidad de horizonte' según Husserl?",
        options: [
            "La capacidad de la mente para representar objetos ausentes.",
            "La relación entre la mente y el cerebro.",
            "La capacidad de la conciencia para trascender el perfil presente de un objeto."
        ],
        correctAnswer: 2
    },
    {
        question: "¿Qué es la 'teoría del marcador somático' según Damasio?",
        options: [
            "Una teoría que explica cómo las emociones influyen en la toma de decisiones.",
            "Una teoría que reduce las emociones a procesos neuronales.",
            "Una teoría que niega la influencia de las emociones en la racionalidad."
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué es la 'intencionalidad' según Brentano?",
        options: [
            "La capacidad de la mente para procesar información.",
            "La direccionalidad de los fenómenos mentales hacia un objeto.",
            "La relación entre la mente y el cerebro."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué es la 'conciencia ampliada' según Damasio?",
        options: [
            "La forma más sencilla de consciencia, que proporciona una sensación de self en el momento presente.",
            "La forma más compleja de consciencia, que sitúa al individuo en su historia personal.",
            "Un estado de consciencia que solo ocurre durante el sueño."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué es la 'intencionalidad' en la filosofía de Husserl?",
        options: [
            "La capacidad de la mente para procesar información.",
            "La direccionalidad de la conciencia hacia un objeto.",
            "La relación entre la mente y el cerebro."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué es la 'teoría enactiva' de la percepción según Alva Noë?",
        options: [
            "Que la percepción es una representación interna del mundo.",
            "Que la percepción es una implicación corporal directa con el mundo.",
            "Que la percepción es un proceso pasivo de recepción de información."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué es la 'autoconciencia reflexiva' según los fenomenólogos?",
        options: [
            "Un estado de conciencia que requiere reflexión y análisis.",
            "Una forma de autoconciencia que es intrínseca a la experiencia consciente.",
            "Un proceso de introspección que convierte la experiencia en un objeto."
        ],
        correctAnswer: 2
    },
    {
        question: "¿Qué es la 'intencionalidad de horizonte' según Husserl?",
        options: [
            "La capacidad de la mente para representar objetos ausentes.",
            "La relación entre la mente y el cerebro.",
            "La capacidad de la conciencia para trascender el perfil presente de un objeto."
        ],
        correctAnswer: 2
    },
    {
        question: "¿Qué es la 'teoría del marcador somático' según Damasio?",
        options: [
            "Una teoría que explica cómo las emociones influyen en la toma de decisiones.",
            "Una teoría que reduce las emociones a procesos neuronales.",
            "Una teoría que niega la influencia de las emociones en la racionalidad."
        ],
        correctAnswer: 0
    },
    {
        question: "¿Qué es la 'intencionalidad' según Brentano?",
        options: [
            "La capacidad de la mente para procesar información.",
            "La direccionalidad de los fenómenos mentales hacia un objeto.",
            "La relación entre la mente y el cerebro."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué es la 'conciencia ampliada' según Damasio?",
        options: [
            "La forma más sencilla de consciencia, que proporciona una sensación de self en el momento presente.",
            "La forma más compleja de consciencia, que sitúa al individuo en su historia personal.",
            "Un estado de consciencia que solo ocurre durante el sueño."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué es la 'intencionalidad' en la filosofía de Husserl?",
        options: [
            "La capacidad de la mente para procesar información.",
            "La direccionalidad de la conciencia hacia un objeto.",
            "La relación entre la mente y el cerebro."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué es la 'teoría enactiva' de la percepción según Alva Noë?",
        options: [
            "Que la percepción es una representación interna del mundo.",
            "Que la percepción es una implicación corporal directa con el mundo.",
            "Que la percepción es un proceso pasivo de recepción de información."
        ],
        correctAnswer: 1
    },
    {
        question: "¿Qué es la 'autoconciencia reflexiva' según los fenomenólogos?",
        options: [
            "Un estado de conciencia que requiere reflexión y análisis.",
            "Una forma de autoconciencia que es intrínseca a la experiencia consciente.",
            "Un proceso de introspección que convierte la experiencia en un objeto."
        ],
        correctAnswer: 2
    }
];
let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElements = document.querySelectorAll(".option");
const feedbackElement = document.getElementById("feedback");
const nextButton = document.getElementById("next-button");

function getRandomQuestionIndex() {
    return Math.floor(Math.random() * questions.length);
}

function loadQuestion() {
    // Selecciona una pregunta aleatoria
    currentQuestionIndex = getRandomQuestionIndex();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElements.forEach((option, index) => {
        option.textContent = currentQuestion.options[index];
    });
    feedbackElement.textContent = "";
    nextButton.style.display = "none";
}

function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correctAnswer) {
        feedbackElement.textContent = "Correcto amor, te ganaste un besito";
        feedbackElement.style.color = "green";
        score++;
    } else {
        feedbackElement.textContent = "Mal mi amor, te perdiste un besito";
        feedbackElement.style.color = "red";
    }
    optionsElements.forEach((option, index) => {
        option.disabled = true;
        if (index === currentQuestion.correctAnswer) {
            option.style.backgroundColor = "green";
        } else {
            option.style.backgroundColor = "red";
        }
    });
    nextButton.style.display = "block";
}

function nextQuestion() {
    // Selecciona una nueva pregunta aleatoria
    currentQuestionIndex = getRandomQuestionIndex();
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        optionsElements.forEach(option => {
            option.disabled = false;
            option.style.backgroundColor = "#007bff";
        });
    } else {
        alert(`Cuestionario terminado. Puntuación: ${score}/${questions.length}`);
        currentQuestionIndex = 0;
        score = 0;
        loadQuestion();
    }
}

// Cargar una pregunta aleatoria al iniciar
loadQuestion();
