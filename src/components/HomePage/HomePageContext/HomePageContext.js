import { createContext, useState } from "react";

// Create a context
export const HomeContext = createContext();

export const HomePageProvider = ({ children }) => {
    const [selectedCard, setSelectedCard] = useState(null);

    const jobData = [  
        {
            jobTitle: 'Data Science Intern',
            company: 'Harber Inc',
            location: '439 Metz Field, Canada',
            remote: true,
            internship: 'Internship • 3 months',
            duration: '5d ago',
            salary: '30k per month',
            tags: ['Computer science engineering', '+2']
        },
        // Add more job data here
    ];

    const handleCardClick = (card) => {
        setSelectedCard(card);
    };

    const handleCloseApplyCard = () => {
        setSelectedCard(null);
    }; 

    return (
        <HomeContext.Provider value={{ jobData, selectedCard, handleCardClick, handleCloseApplyCard }}>
            {children}
        </HomeContext.Provider>
    );
};
