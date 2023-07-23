export const es = {
    components: {
        diet: {
            validation: {
                descriptionValidation: 'Descripción',
                mealsValidation: 'Comidas',
                nameValidation: 'Nombre',
                userValidation: 'Usuario',
            }
        },
        nutritionGoals: {
            validation: {
                caloriesValidation: 'Calorías',
                carbohydratesValidation: 'Carbohidratos',
                fatsValidation: 'Grasas',
                proteinsValidation: 'Proteínas',
            }
        },
        user: {
            enums: {
                activityLevel: {
                    sedentary: 'Sedentario',
                    lightlyActive: 'Ligeramente activo',
                    moderatelyActive: 'Moderadamente activo',
                    veryActive: 'Muy activo',
                },
                foodPreferences: {
                    omnivore: 'Omnívoro',
                    vegetarian: 'Vegetariano',
                    vegan: 'Vegano',
                    pescetarian: 'Pescetariano',
                    glutenFree: 'Libre de gluten',
                    lactoseFree: 'Libre de lactosa',
                },
                gender: {
                    male: 'Masculino',
                    female: 'Femenino',
                    other: 'Otro',
                    preferNotToSay: 'Prefiere no decir',
                },
                healthConditions: {
                    none: 'Ninguno',
                    diabetes: 'Diabetes',
                    lactoseIntolerance: 'Intolerancia a la lactosa',
                    glutenIntolerance: 'Intolerancia al gluten',
                    hypertension: 'Hipertensión',
                    heartDisease: 'Enfermedad cardíaca',
                },
                userStatus: {
                    active: 'Activo',
                    inactive: 'Inactivo',
                    suspended: 'Suspendido',
                },
                userType: {
                    basic: 'Básico',
                    advanced: 'Avanzado',
                },
            },
            controller: {
                usersFetched: 'Usuarios obtenidos exitosamente',
                userCreated: 'Usuario creado exitosamente',
                userFetched: 'Usuario obtenido exitosamente',
                userUpdated: 'Usuario actualizado exitosamente',
                userDeleted: 'Usuario eliminado exitosamente',
            },
            service: {
                userNotFound: 'Usuario no encontrado',
                errorGettingAllUsers: 'Error al obtener todos los usuarios',
                errorCreatingUser: 'Error al crear usuario',
                errorGettingUser: 'Error al obtener usuario',
                errorUpdatingUser: 'Error al actualizar usuario',
                errorDeletingUser: 'Error al eliminar usuario',
                passwordMustBeProvided: 'Se debe proporcionar una contraseña',
                usernameAlreadyExists: 'El nombre de usuario ya existe',
                emailAlreadyExists: 'El correo electrónico ya existe',
                passwordMustBeDifferentFromYourCurrent: 'La contraseña ingresada debe ser diferente a la actual',
            },
            validation: {
                invalidUserData: '. Datos de usuario inválidos',
                activityLevelValidation: 'Nivel de actividad',
                birthDateValidation: 'Formato de fecha',
                clientsValidation: {
                    clientsValidation: 'Clientes',
                    mustBeAdvanced: 'Solo los usuarios avanzados pueden tener clientes'
                },
                contactInfoValidation: {
                    phoneNumberValidation: 'Número de teléfono',
                    addressValidation: 'Dirección',
                },
                emailValidation: 'Correo electrónico',
                foodPreferencesValidation: 'Preferencias alimenticias',
                genderValidation: 'Género',
                healthConditionsValidation: 'Condiciones de salud',
                heightValidation: 'altura',
                nameValidation: 'Nombre',
                passwordValidation: {
                    passwordValidation: 'Contraseña',
                    mustContain: 'La contraseña debe contener al menos 2 dígitos, 1 letra mayúscula, 1 letra minúscula y 1 carácter especial',
                },
                statusValidation: 'Estado',
                surnameValidation: 'Apellido',
                usernameValidation: 'Nombre de usuario',
                userTypeValidation: 'Tipo de usuario',
                weightValidation: 'Peso',
            },
        },
    },
    database: {
        connectionShutdown: {
            connectionShutdown: 'Mongoose ha sido desconectado debido a'
        },
        handleDBEvents: {
            connectionError: 'Error de conexión:',
            startingConnection: 'Iniciando conexión con MongoDB...',
            connectionInitiated: 'Conexión iniciada, esperando que se abra...',
            connected: '¡Conectado a MongoDB!',
            disconnecting: 'Desconectando de MongoDB...',
            connectionClosed: 'Conexión con MongoDB cerrada',
            successfulReconnection: '¡Reconexión exitosa con MongoDB!',
            nodemonRestart: 'Reinicio de Nodemon',
            applicationTermination: 'terminación de la aplicación',
        },
        attemptConnection: {
            connectionFailed: {
                connection: 'Falló la conexión, reintentando en',
                seconds: 'segundos...',
                attempt: 'Intento:',
            },
            connectionToDatabaseError: 'Error al conectar con la base de datos:',
            unknownDatabaseError: 'Ocurrió un error desconocido de conexión a la base de datos',
        },
    },
    middlewares: {
        handleError: {
            internalServerError: 'Error interno del servidor',
        }
    },
    commonMessages: {
        emptyData: 'no puede estar vacío',
        invalidData: 'Datos inválidos para',
        mustBeArray: 'debe ser un array',
        mustBeNumber: 'debe ser un número',
        mustBePositive: 'debe ser un número positivo',
        mustBeString: 'debe ser una cadena',
        mustBeOneOfTheFollowing: 'debe ser uno de los siguientes',
        minLength: 'tiene una longitud mínima de',
        maxLength: 'tiene una longitud máxima de',
    },
};