import { IDefaultFoodDatabase, IEatenMeal, IUserDefaultData } from "../types/sharedTypes";

export const dynamicKeyFormHandler = (
       key: keyof IUserDefaultData,
       value: string,
       state: IUserDefaultData,
       setter: React.Dispatch<React.SetStateAction<IUserDefaultData>>): void => {
       setter({
         ...state,
         [key]: value
       })
}

export const nowDateGenerator = ():string => {
        const now = new Date();
        const customFormatted = customDateFormatter(now)
        return customFormatted   
}

       const customDateFormatter = (value: Date) => {
             return `${value.getDate().toString().padStart(2, '0')}.${(value.getMonth() + 1)
            .toString()
            .padStart(2, '0')}.${value.getFullYear()}` 
       }
     
export  const dateFormatter = (value:string) => {
         const date = new Date(value)
         const customFormatted = customDateFormatter(date)
         return customFormatted
       }
       
export const todayHasEaten = (array: IEatenMeal[]) => {
        const todayEaten = [...array].filter( (el) => {
        const pastDate = dateFormatter(el.date)
        const presentDate = nowDateGenerator()
         return pastDate === presentDate
        })
        let calories = 0
        todayEaten.map( (day) => {
           calories += day.kcal
        })
       return Math.round(calories)
  }

export const foodsFilter = ( array:IDefaultFoodDatabase[], searchedElement: string ):IDefaultFoodDatabase[] => {
      return [...array].filter( (food:IDefaultFoodDatabase) => food.name_en.toLowerCase().includes(searchedElement.toLowerCase())) 
}

export const uniqueFoodSort = (array:IDefaultFoodDatabase[]):IDefaultFoodDatabase[]  => {
        const uniqueFoods = array.filter(
         (item, index, self) =>
           index === self.findIndex(
             (food) => food.name_en.toLowerCase() === item.name_en.toLowerCase()
           )
       )
       return uniqueFoods
}

export const singleMealCalories = (meal:IDefaultFoodDatabase, weight: string):number => {
        const fixedWeight = +(+weight / 100).toFixed(2)
        const totalPer100g = (meal.proteins * 4) + (meal.fats * 9) + (meal.carbs * 4)
        return +(totalPer100g * fixedWeight).toFixed(2)
}


export const datesToDisplay = (days:number): string[] => {
        const dates: string[] = []
        const today = new Date()
        for (let i = 0; i < days; i++) {
          const d = new Date(today)
          d.setDate(today.getDate() - i)
          dates.push(String(d))
        }
        const datesToReturn = [...dates].map( (el:string) => {
           return converseDate(el)
        })
        return datesToReturn
}

export const converseDate = (date:string):string => {
         const dateObject = new Date( date)  
         const newFormatForADate = dateObject.toLocaleDateString("de-DE", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric"
        })     
        return newFormatForADate
}

export const sortHistoryIntake = (history: IEatenMeal[]):{[key: string] : IEatenMeal[]} => {
        const objectToReturn: {[key: string] : IEatenMeal[]} = {}
        history.map( (intake) => { 
         const newFormatForADate = converseDate(intake.date)
         if ( Object.hasOwn( objectToReturn , newFormatForADate ) ) {
            objectToReturn[newFormatForADate].push(intake)
            return
         } 
            objectToReturn[newFormatForADate] = [intake]
            return
        }) 
        return objectToReturn
}