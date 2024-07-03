
// <!-- Load Users into local storage-->
let users = [
    {
        userId: "1",
        email: "tushar@gmail.com",
        username: "Tushar Mahajan",
        password: "tushar123"
    },
    {
        userId: "2",
        email: "bhuvan@gmail.com",
        username: "Bhuvan Chaudhari",
        password: "bhuvan123"
    },
    {
        userId: "3",
        email: "jayesh@gmail.com",
        username: "Jayesh Talele",
        password: "jayesh123"
    },
    {
        userId: "4",
        email: "vaibhav@gmail.com",
        username: "Vaibhav Tayade",
        password: "vaibhav123"
    },
    {
        userId: "5",
        email: "Pankaj@gmail.com",
        username: "Pankaj Patil",
        password: "pankaj123"
    },
];


// Load posts..
let posts = [
    {
        userId: "1",
        blogId: 1,
        category: "programming",
        title: "What is java",
        content: "What is Java technology and why do I need it Java is a programming language and computing platform first released by Sun Microsystems in 1995. It has evolved from humble beginnings to power a large share of today’s digital world, by providing the reliable platform upon which many services and applications are built. New, innovative products and digital services designed for the future continue to rely on Java, as well.While most modern Java applications combine the Java runtime and application together, there are still many applications and even some websites that will not function unless you have a desktop Java installed. Java.com, this website, is intended for consumers who may still require Java for their desktop applications – specifically applications targeting Java 8. Developers as well as users that would like to learn Java programming should visit the dev.java website instead and business users should visit oracle.com/java for more information.",
        img: "../data-files/blog-data-images/download.png",
        date: new Date()
    },
    {
        userId: "2",
        blogId: 2,
        category: "fashion",
        title: "How do you approach the process of creating a cohesive fashion collection?",
        content: " Creating a cohesive fashion collection involves several key steps. Firstly, I start with extensive research, gathering inspiration from diverse sources such as art, culture, and current trends. Next, I develop a concept or theme that ties the collection together, ensuring each piece contributes to a unified narrative. Sketching and refining designs come next, paying close attention to silhouette, fabric choice, and details. Prototyping and fitting sessions are crucial for perfecting the garments, ensuring they are both aesthetically pleasing and comfortable to wear. Finally, I focus on presentation, considering how the collection will be styled, showcased, and marketed to resonate with my target audience.",
        img: "../data-files/blog-data-images/fashion-collection.jpg",
        date: new Date()
    },
    {
        userId: "1",
        blogId: 3,
        category: "programming",
        title: "How can developers effectively manage dependencies in a software project?",
        content: "Managing dependencies is crucial for ensuring the stability and scalability of a software project. One effective approach is to use package managers specific to your programming language or framework, such as npm for Node.js or pip for Python. These tools streamline the process of installing, updating, and removing dependencies, ensuring compatibility and version control. Additionally, employing dependency management techniques like semantic versioning and locking down specific versions helps prevent unexpected issues caused by updates. Regularly auditing dependencies for security vulnerabilities and incorporating automated testing can further enhance reliability and security across the project.",
        img: "../data-files/blog-data-images/dependency.png",
        date: new Date()
    },
    {
        userId: "3",
        blogId: 4,
        category: "lifestyle",
        title: "How do you maintain a healthy work-life balance in your daily routine?",
        content: "Maintaining a healthy work-life balance is crucial for my overall well-being. I prioritize setting boundaries between work and personal time by scheduling regular breaks throughout the day. This allows me to recharge and stay productive. I also make time for activities that bring me joy and relaxation, such as exercising, reading, or spending quality time with loved ones. Setting realistic goals and deadlines helps me manage my workload effectively, reducing stress and preventing burnout. Additionally, I practice mindfulness and reflection to stay grounded and maintain perspective on what truly matters in life.",
        img: "../data-files/blog-data-images/fashion-daily.jpg",
        date: new Date()
    },
    {
        userId: "2",
        blogId: 5,
        category: "fashion",
        title: " How do you stay updated with the latest trends in the fashion industry?",
        content: "Staying abreast of trends in the fast-paced fashion industry requires a multi-faceted approach. I regularly attend fashion shows, both locally and internationally, to observe emerging styles and trends firsthand. Following influential fashion blogs, magazines, and social media accounts keeps me informed about what's gaining popularity among consumers and industry insiders. Networking with other designers and professionals in the field provides valuable insights into upcoming trends and shifts in consumer preferences. Additionally, I participate in workshops, seminars, and exhibitions to gain deeper knowledge and understanding of evolving design techniques and materials. By maintaining a keen eye on both global and niche trends, I ensure my designs remain relevant and appealing to my audience.",
        img: "../data-files/blog-data-images/fashion-daily.jpg",
        date: new Date()
    },
    {
        userId: "5",
        blogId: 6,
        category: "travel",
        title: "Where Will Your Solo Adventure Begin?",
        content: "Have you ever considered embarking on a journey completely on your own terms? Solo travel is more than just a trend—it’s a transformative experience that allows you to reconnect with yourself while exploring new horizons. Whether you’re a seasoned solo traveler or contemplating your first solo adventure, the world beckons with endless possibilities waiting to be discovered.Imagine waking up to the breathtaking sunrise over a mist-covered mountain peak, or savoring a quiet moment by a serene lakeside. Solo travel offers a chance to embrace solitude, self-discovery, and independence in ways that are uniquely empowering.From navigating bustling markets in exotic cities to finding serenity in remote natural landscapes, every destination holds the promise of new encounters and profound experiences. It’s about immersing yourself in local cultures, connecting with people from diverse backgrounds, and expanding your perspective on the world.So, where will your solo adventure begin? Will you wander through ancient ruins steeped in history, or embark on a culinary journey through vibrant street markets? Perhaps you’ll find yourself trekking through lush rainforests or exploring hidden alleys in bustling neighborhoods.Solo travel is not just about the places you visit—it’s about the personal growth and unforgettable memories you create along the way. It’s about stepping outside of your comfort zone, embracing spontaneity, and discovering the inner strength that comes with navigating the unknown.Join me as we celebrate the liberating spirit of solo travel and uncover the hidden gems waiting to be explored. Whether you seek solitude or seek to forge new connections, your solo adventure awaits—where will you go next?",
        img: "../data-files/blog-data-images/solo-advanture.jpg",
        date: new Date()
    },
    {
        userId: "4",
        blogId: 7,
        category: "food",
        title: "Exploring Culinary Delights: A Journey Through Global Cuisine",
        content: `Have you ever found yourself captivated by the tantalizing aromas wafting from a bustling street food stall, or mesmerized by the intricate flavors of a gourmet dish? Welcome to the world of culinary exploration, where each bite tells a story and every recipe unlocks a new adventure.

Join me as we embark on a journey through global cuisine, uncovering the rich tapestry of flavors, traditions, and techniques that define food culture around the world. From the vibrant spices of Indian curries to the delicate artistry of Japanese sushi, each dish offers a glimpse into the heart and soul of its origins.

Discover the joy of recreating beloved recipes in your own kitchen, from mastering the perfect French pastry to experimenting with bold Mexican flavors. Explore seasonal ingredients, local specialties, and innovative cooking methods that elevate home cooking to an art form.

Whether you’re a passionate home cook or a curious food enthusiast, there’s something magical about the shared experience of food. It brings people together, sparks conversations, and creates lasting memories that transcend borders and languages.

Join me as we celebrate the universal language of food, one delicious bite at a time. Let’s savor the flavors of the world, embrace culinary diversity, and elevate our appreciation for the extraordinary stories behind every dish. Because in the kitchen, there’s always a new adventure waiting to unfold.

`,
        img: "../data-files/blog-data-images/fool-culture.jpg",
        date: new Date()
    },
    {
        userId: "4",
        blogId: 8,
        category: "food",
        title: " Nourishing the Soul: The Art of Mindful Eating",
        content: `Have you ever stopped to truly savor the taste, texture, and aroma of your food? In our fast-paced world, mindful eating offers a pathway to reconnect with our senses, nourish our bodies, and cultivate a deeper appreciation for the meals we enjoy.

Join me on a journey of mindful eating, where every meal becomes an opportunity to practice gratitude, presence, and conscious consumption. Discover simple techniques to slow down and savor each bite, from practicing mindful breathing before meals to tuning into your body’s hunger and fullness cues.

Explore the benefits of incorporating fresh, seasonal ingredients into your diet, from vibrant salads bursting with color to comforting soups that warm the soul. Learn how to create balanced meals that nourish both body and mind, incorporating wholesome grains, lean proteins, and nutrient-rich vegetables.

Experience the joy of cooking with intention and creativity, whether you’re preparing a leisurely weekend brunch or a quick weeknight dinner. Discover how meal planning and preparation can streamline your cooking process and empower you to make healthier choices.

Join me as we embrace the art of mindful eating and cultivate a deeper connection to the food we eat. Let’s explore recipes that celebrate simplicity, sustainability, and the joy of nourishing our bodies with wholesome ingredients. Because when we eat mindfully, every meal becomes a moment of mindfulness and self-care.`,
        img: "../data-files/blog-data-images/food-eating.jpg",
        date: new Date()
    },
    {
        userId: "3",
        blogId: 9,
        category: "lifestyle",
        title: "How do you incorporate sustainability into your everyday lifestyle choices?",
        content: " Incorporating sustainability into my everyday life involves making conscious choices that reduce my environmental impact. I prioritize using reusable items such as shopping bags, water bottles, and food containers to minimize waste. I support local and eco-friendly businesses whenever possible, opting for products that are ethically sourced and produced. I also practice mindful consumption by reducing unnecessary purchases and reusing or repurposing items whenever feasible. Choosing sustainable transportation options, such as walking, biking, or using public transit, helps reduce my carbon footprint. By adopting these practices, I contribute to a more sustainable future while promoting responsible stewardship of our planet.",
        img: "../data-files/blog-data-images/lifestyle-choice.jpg",
        date: new Date()
    },
    {
        userId: "1",
        blogId: 10,
        category: "programming",
        title: "What are some best practices for writing clean and maintainable code?",
        content: "Writing clean and maintainable code is essential for improving collaboration, reducing bugs, and enhancing the longevity of a software project. Begin by adhering to consistent coding conventions and naming conventions to improve readability. Break down complex tasks into smaller, modular functions or classes, each responsible for a specific task or functionality. Use meaningful variable names and avoid overly complex logic to make your code easier to understand and maintain. Documenting your code with comments and clear documentation helps other developers understand its purpose and usage. Lastly, conduct code reviews regularly to solicit feedback, identify potential improvements, and ensure adherence to coding standards and best practices. These practices collectively contribute to a codebase that is easier to maintain, debug, and scale over time.",
        img: "../data-files/blog-data-images/clean-code.jpg",
        date: new Date()
    },
    {
        userId: "5",
        blogId: 11,
        category: "travel",
        title: "Where Will Your Next Adventure Take You?",
        content: "Have you ever found yourself daydreaming about the next destination on your travel bucket list? Perhaps it’s a secluded beach with crystal-clear waters, or a bustling city brimming with culture and history. Whatever your wanderlust desires, the world is filled with endless possibilities waiting to be explored.Traveling is not just about visiting new places; it's about embracing the unfamiliar and immersing yourself in different cultures, landscapes, and experiences. It’s about stepping outside of your comfort zone and discovering the beauty that lies beyond your everyday routine.Imagine waking up to the sound of waves crashing on a pristine beach, or wandering through ancient cobblestone streets lined with vibrant markets. Each destination offers a unique story to tell and memories to cherish for a lifetime.Whether you’re a seasoned traveler or embarking on your first adventure, there’s something magical about the anticipation of discovering a new corner of the world. From tasting exotic cuisines to marveling at architectural wonders, every journey offers a chance to broaden your perspective and ignite your sense of wonder.So, where will your next adventure take you? Will you embark on a road trip through picturesque landscapes, or set sail on a cruise to exotic islands? Will you hike through rugged mountains or explore hidden gems in bustling metropolises?The beauty of travel lies in its ability to inspire, educate, and transform. It encourages us to embrace spontaneity, connect with others, and appreciate the diversity of our planet. Whether you’re seeking relaxation, adventure, or cultural immersion, there’s a destination waiting to fulfill your travel dreams.Join me as we embark on a journey of discovery, one destination at a time. Let’s uncover the hidden treasures, experience the extraordinary, and create memories that will last a lifetime. Because in the end, the best stories are found between the pages of your passport.",
        img: "../data-files/blog-data-images/next-advanture.jpg",
        date: new Date()
    },
];

// Load posts..
let comments = [
    {
        blogId: 1,
        text: "Hope This helpful to you!.",
        date: new Date().toString().slice(4, 15),
        userId: 1
    },
    {
        blogId: 4,
        text: "Hey.. How are you today..",
        date: new Date().toString().slice(4, 15),
        userId: 3
    },
    {
        blogId: 2,
        text: "nice",
        date: new Date().toString().slice(4, 15),
        userId: 1
    },
    {
        blogId: 2,
        text: "superb",
        date: new Date().toString().slice(4, 15),
        userId: 5
    },
    {
        blogId: 3,
        text: "very good",
        date: new Date().toString().slice(4, 15),
        userId: 2
    },
    {
        blogId: 4,
        text: "superb",
        date: new Date().toString().slice(4, 15),
        userId: 5
    },
    {
        blogId: 5,
        text: "informative",
        date: new Date().toString().slice(4, 15),
        userId: 4
    },
    {
        blogId: 6,
        text: "nice",
        date: new Date().toString().slice(4, 15),
        userId: 3
    },
    {
        blogId: 7,
        text: "very good",
        date: new Date().toString().slice(4, 15),
        userId: 4
    },
    {
        blogId: 8,
        text: "thank you",
        date: new Date().toString().slice(4, 15),
        userId: 1
    },
    {
        blogId: 9,
        text: "this is helpful to me",
        date: new Date().toString().slice(4, 15),
        userId: 3
    },
    {
        blogId: 10,
        text: "nice information",
        date: new Date().toString().slice(4, 15),
        userId: 5
    },
    {
        blogId: 5,
        text: "good information",
        date: new Date().toString().slice(4, 15),
        userId: 2
    },
    {
        blogId: 10,
        text: "superb",
        date: new Date().toString().slice(4, 15),
        userId: 4
    },
    {
        blogId: 11,
        text: "nice information",
        date: new Date().toString().slice(4, 15),
        userId: 3
    },
    {
        blogId: 6,
        text: "Let's start your solo journey guys..",
        date: new Date().toString().slice(4, 15),
        userId: 5
    },
];

if (!localStorage.getItem("isDummyLoad")) {
    localStorage.setItem("user", JSON.stringify(users));
    // localStorage.setItem("loginUser", 1);
    localStorage.setItem("blogs", JSON.stringify(posts));
    localStorage.setItem("comments", JSON.stringify(comments));


    localStorage.setItem("isDummyLoad", 1);
}
