<script setup lang="ts">


const formData = reactive({
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  message: "",
})

const isLoading = ref(false)

const rules = computed(() => {
  return {
    firstName: {
      required: helpers.withMessage('Field is required', required),

    },
    lastName: {
      required: helpers.withMessage('Field is required', required),
    },
    email: {
      required: helpers.withMessage('Field is required', required),
      email: helpers.withMessage('Email is incorrect', email),
    },
    phoneNumber: {
      required: helpers.withMessage('Field is required', required),
      minLength: helpers.withMessage('Invalid phone number', minLength(10)),
      maxLength: helpers.withMessage('Invalid phone number', maxLength(10)),
    }
  }
})

const v$ = useVuelidate(
  rules,
  computed(() => formData),
)



async function registerUser() {
  isLoading.value = true

  isLoading.value = false
}
</script>

<template>
  <!-- <form method="POST" class="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48">
    <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <BaseInputGroup required class="mb-5 !text-primary-500" labelClass="md:text-primary-500" label="First Name"
            :error="v$.firstName.$error && v$.firstName.$errors[0].$message">
            <BaseInput v-model="formData.firstName" placeholder="First Name" name="firstName"
              :invalid="v$.firstName.$error" @input="v$.firstName.$touch()" />
          </BaseInputGroup>
        </div>

        <div>
          <BaseInputGroup required class="mb-5 !text-primary-500" labelClass="md:text-primary-500" label="Last Name"
            :error="v$.lastName.$error && v$.lastName.$errors[0].$message">
            <BaseInput v-model="formData.lastName" placeholder="Last Name" name="lastName" :invalid="v$.lastName.$error"
              @input="v$.lastName.$touch()" />
          </BaseInputGroup>
        </div>

        <div class="sm:col-span-2">
          <BaseInputGroup required class="mb-5 !text-primary-500" labelClass="md:text-primary-500" label="Email"
            :error="v$.email.$error && v$.email.$errors[0].$message">
            <BaseInput v-model="formData.email" placeholder="your-email@example.com" name="email"
              :invalid="v$.email.$error" @input="v$.email.$touch()" />
          </BaseInputGroup>
        </div> -->

        <!-- <div class="sm:col-span-2">
          <BaseInputGroup required class="mb-5 !text-primary-500" labelClass="md:text-primary-500" label="Phone Number"
            :error="v$.phoneNumber.$error && v$.phoneNumber.$errors[0].$message">
            <BasePhoneInput v-model="formData.phoneNumber" 
              :invalid="v$.phoneNumber.$error" @input="v$.phoneNumber.$touch()" />
          </BaseInputGroup>
        </div> -->
        <!-- <div class="sm:col-span-2">
          <label for="message" class="block text-sm font-semibold leading-6 text-primary-500">Message</label>
          <div class="mt-2.5">
            <textarea v-model="formData.message" name="message" id="message" rows="4"
              class="block w-full rounded-md border-0 px-3.5 py-2 text-primary-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
          </div>
        </div>
      </div>
      <div class="mt-8 flex md:justify-end justify-center">
        <BaseButton type="submit" @click.prevent="registerUser"
          class="rounded-md bg-primary-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          :loading="isLoading" :disabled="isLoading">
          Send message
        </BaseButton>
      </div>
    </div>
  </form> -->
</template>