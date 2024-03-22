<script setup>
defineProps(['question'])
defineEmits(['next-question'])
</script>

<template>
    <div class="bg-white shadow-md sm:rounded-lg w-full">
      <div class="px-4 py-5 sm:p-6">
        <h3 class="text-lg font-semibold leading-6 text-gray-900">{{ question.title }}</h3>
        <div class="mt-2 w-full text-gray-500">
          <p>{{ question.description }}</p>
        </div>
        <div class="mt-5 flex gap-4" v-if="question.options">
            <button type="button" class="items-center rounded-md bg-asbest-blue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-asbest-blue-dark w-full duration-300" 
                v-for="option in question.options" :key="option.id"
                @click="$emit('next-question', question.id, option.id)"
            >
                {{ option.text }}
            </button>
        </div>
      </div>
    </div>
  </template>
  