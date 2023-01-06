import React, { createContext, useContext, useState } from "react";

const AppContext = createContext({});

const initFishes = [
  {
    name: 'trout',
    url: 'https://e7.pngegg.com/pngimages/939/600/png-clipart-rainbow-trout-largemouth-bass-cutthroat-trout-fly-fishing-fishing-seafood-fish-products.png'
  },
  {
    name: 'salmon',
    url: 'https://banner2.cleanpng.com/20180509/ptw/kisspng-atlantic-salmon-fish-smoked-salmon-salmonids-5af3520d8077e7.9592797115258956935262.jpg'
  },
  {
    name: 'tuna',
    url: 'https://e7.pngegg.com/pngimages/1000/364/png-clipart-albacore-bigeye-tuna-pacific-bluefin-tuna-atlantic-bluefin-tuna-yellowfin-tuna-fish-seafood-animals.png'
  },
  {
    name: 'sardine',
    url: 'https://toppng.com/uploads/preview/sardine-png-sardine-fish-png-download-sardine-images-11557064339vjeu5krsvo.png'
  },
]

export const AppProvider = ({children}) => {
  const [fish, setFish] = useState(initFishes);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  return <AppContext.Provider value={{
    fish, 
    setFish, 
    correctCount,
    setCorrectCount,
    incorrectCount,
    setIncorrectCount
  }}>{children}</AppContext.Provider>
}

export const useAppContext =() => {
  const context = useContext(AppContext)
  return {
    fish: context.fish,
    setFish: context.setFish, 
    correctCount: context.correctCount,
    setCorrectCount: context.setCorrectCount,
    incorrectCount: context.incorrectCount,
    setIncorrectCount: context.setIncorrectCount
  }
}