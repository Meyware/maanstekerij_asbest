<script setup>
import FormStep from '@/components/FormStep.vue'
import { ref, computed } from 'vue'

const questions = [
        {
            id: 101,
            title: 'Je mag gerust zijn.',
            description: 'Je hebt geen asbestattest nodig. Wil je toch graag meer advies? Contacteer gerust één van onze experts uit je buurt!',
            options: [
                { id: 0, text: 'Opnieuw beginnen' }
            ]
        },
        {
            id: 100,
            title: 'Je hebt een asbestattest nodig.',
            description: 'Daar kunnen we je bij helpen: vraag vandaag nog je asbestattest aan. Liever eerst een offerte of advies? Geen probleem. We staan voor je klaar.',
            options: [
                { id: 0, text: 'Opnieuw beginnen' }
            ]
        },
        {
            id: 1,
            title: 'Ligt het gebouw in Vlaanderen?',
            description: 'Bijvoorbeeld een studio, garage, appartement, of een appartementsgebouw,  woonhuis, bedrijfspand,...',
            options: [
                { id: 1, text: 'Ja' },
                { id: 2, text: 'Nee' }
            ]
        },
        {
            id: 2,
            title: 'Is het gebouw vòòr 2001 gebouwd?',
            description: 'Als je de eerste eigenaar bent, heb je de woning vòòr 2001 betrokken?',
            options: [
                { id: 1, text: 'Ja' },
                { id: 2, text: 'Nee' }
            ]
        },
    ]

    const answers = ref([]);
    
    const currentQuestionId = ref(1)
    const currentQuestion = computed(() => {
        const hasAnsweredQuestion1 = answers.value.some(answer => answer.questionId === 1);
        const hasAnsweredQuestion2 = answers.value.some(answer => answer.questionId === 2);
        
        if (hasAnsweredQuestion1 && hasAnsweredQuestion2) {
            const isConditionFor100Met = answers.value.some(answer => answer.questionId === 1 && answer.optionId === 1) &&
                                        answers.value.some(answer => answer.questionId === 2 && answer.optionId === 1);

            if (isConditionFor100Met) {
                return questions.find(question => question.id === 100);
            } else {
                return questions.find(question => question.id === 101);
            }
        }
        
        const question = questions.find(question => question.id === currentQuestionId.value);
        return question || null;
    });

    const nextQuestion = (questionId, optionId) => {
        //currentQuestionId.value = nextQuestionId
        if(optionId === 0) {
            answers.value = []
            currentQuestionId.value = 1
            return
        }

        answers.value.push({
            questionId,
            optionId
        })
        currentQuestionId.value = questionId + 1
    }
</script>

<template>
    <div class="flex items-center justify-center h-screen mx-auto max-w-7xl sm:px-6 lg:px-8">
        <FormStep :question="currentQuestion" @next-question="nextQuestion" />
    </div>
</template>

