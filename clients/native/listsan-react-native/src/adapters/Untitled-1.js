// give me a script in javascript that can parse this page :https://www.dofus.com/fr/mmorpg/encyclopedie/classes and the sub characters classes pages of Dofus
// and give me a json file with all the classes and sub classes

function getClasses() {
  const classes = document.querySelectorAll(".ak-encyclo-detail-type");
  const classesArray = Array.from(classes);
  const classesNames = classesArray.map((el) => el.innerText);
  const classesLinks = classesArray.map((el) => el.href);
  const classesData = classesNames.map((name, index) => ({
    name,
    link: classesLinks[index],
  }));
  return classesData;
}

function getSubClasses() {
    const subClasses = document.querySelectorAll(".ak-encyclo-detail-type");
    const subClassesArray = Array.from(subClasses);
    const subClassesNames = subClassesArray.map((el) => el.innerText);
    const subClassesLinks = subClassesArray.map((el) => el.href);
    const subClassesData = subClassesNames.map((name, index) => ({
        name,
        link: subClassesLinks[index],
    }));
    return subClassesData;
}

function getSubClassesData() {
    const subClassesData = getSubClasses();
    const subClassesDataWithDetails = subClassesData.map((subClass) => {
        const { name, link } = subClass;
        const { description, stats } = getSubClassDetails(link);
        return {
            name,
            link,
            description,
            stats,
        };
    });
    return subClassesDataWithDetails;
}

function getSubClassDetails(link) {
    const description = document.querySelector(".ak-container.ak-panel-stack").innerText;
    const stats = document.querySelector(".ak-container.ak-panel-stack").innerText;
    return {
        description,
        stats,
    };
}

function getClassesData() {
    const classesData = getClasses();
    const classesDataWithDetails = classesData.map((classe) => {
        const { name, link } = classe;
        const { description, stats } = getClassDetails(link);
        return {
        name,
        link,
        description,
        stats,
        };
    });
    return classesDataWithDetails;
}

function getClassDetails(link) {
    const description = document.querySelector(".ak-container.ak-panel-stack").innerText;
    const stats = document.querySelector(".ak-container.ak-panel-stack").innerText;
    return {
        description,
        stats,
    };
}

function getClassesAndSubClasses() {
    const classesData = getClassesData();
    const subClassesData = getSubClassesData();
    return {
        classesData,
        subClassesData,
    };
}

getClassesAndSubClasses();



    



    
