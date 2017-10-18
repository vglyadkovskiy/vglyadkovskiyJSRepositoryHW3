"use strict";

class Device {
   constructor(name, brand, power, energyEfficiencyClass){
      this._name = name;
      this._brand = brand;
      this._power = power;
      this._energyEfficiencyClass = energyEfficiencyClass;
      this._state = false;    
   }
   get name() {
      return this._name;
   }
   set name(name) {
      this._name = name;
   }
   get brand() {
      return this._brand;
   }
   set brand(brand) {
      this._brand = brand;
   }
   get power() {
      return this._power;
   }
   set power(power) {
      this._power = power;
   }
   get energyEfficiencyClass() {
      return this._energyEfficiencyClass;
   }
   set energyEfficiencyClass(energyEfficiencyClass) {
      this._energyEfficiencyClass = energyEfficiencyClass;
   }
   getState() {
      return this._state;
   }
   switchOn() {
      if ($('#switch').prop('checked')){
         this._state = true;
      }
   }
   switchOff() {
      if (!($('#switch').prop('checked'))){
         this._state = false;
      }
   }
}


class Fridge extends Device {
   constructor(name, brand, power, energyEfficiencyClass, capacity, numberOfCameras, coolingSystem) {
      super(name, brand, power, energyEfficiencyClass); 
      this._capacity = capacity;
      this._numberOfCameras = numberOfCameras;
      this._coolingSystem = coolingSystem;
   }
   get capacity() {
      return this._capacity;
   }
   set сapacity(capacity) {
      this._capacity = capacity;
   }
   get numberOfCameras() {
      return this._numberOfCameras;
   }
   set numberOfCameras(numberOfCameras) {
      this._numberOfCameras = numberOfCameras;
   }
   get coolingSystem() {
      return this._coolingSystem;
   }
   set coolingSystem(coolingSystem) {
      this._coolingSystem = coolingSystem;
   }
}

let fridge = new Fridge("Fridge", "Liebherr", 4, "AAA+", 100, 2, "No Frost");
let fridge2 = new Fridge("Fridge", "Samsung", 2.5, "AA+", 80, 1, "No Frost");
console.log(fridge.getState()); 



class WashingMachine extends Device {
   constructor(name, brand, power, energyEfficiencyClass, typeWM, maxLoading, enginesType) {
      super(name, brand, power, energyEfficiencyClass); 
      this._typeWM = typeWM;
      this._maxLoading = maxLoading;
      this._enginesType = enginesType;
   }
   get typeWM() {
      return this._typeWM;
   }
   set typeWM(typeWM) {
      this._typeWM = typeWM;
   }
   get maxLoading() {
      return this._maxLoading;
   }
   set maxLoading(maxLoading) {
      this._maxLoading = maxLoading;
   }
   get enginesType() {
      return this._enginesType;
   }
   set enginesType(enginesType) {
      this._enginesType = enginesType;
   }
}

let washingMachine = new WashingMachine("Washing Machine", "Indesit", 1, "A+", "Frontal", 7, "Inverter Direct Drive");

class TV extends Device {
   constructor(name, brand, power, energyEfficiencyClass, typeTV, diagonal, resolution) {
      super(name, brand, power, energyEfficiencyClass); 
      this._typeTV = typeTV;
      this._diagonal = diagonal;
      this._resolution = resolution;
   }
   get typeTV() {
      return this._typeTV;
   }
   set typeTV(typeTV) {
      this._typeWM = typeWM;
   }
   get diagonal() {
      return this._diagonal;
   }
   set diagonal(diagonal) {
      this._diagonal = diagonal;
   }
   get resolution() {
      return this._resolution;
   }
   set resolution(resolution) {
      this._resolution = resolution;
   }
}

let tv1 = new TV("TV", "Samsung", 0.2, "AAA+", "LED", 55, "3840x2160 Ultra HD");



class SmartHome {
   constructor(){
      this._devices = [];
   }
   getDevices() {
      return this._devices;
   }
   addDevice(dev) {
   this._devices.push(dev);
   }
   delDevice(numbDev) {
   this._devices.splice(numbDev, 1); 
   }
}

let sh = new SmartHome();
sh.addDevice(fridge);
sh.addDevice(washingMachine);
sh.addDevice(tv1);
//sh.addDevice(fridge2);

console.log(sh.getDevices());

console.log(sh.getDevices().length);
console.log("My devices:");
console.log(sh.getDevices());

let formSH = document.getElementById("SH");
let arrDivMed = [];

function createSmartHome() {
   if ((sh.getDevices().length) !== 0){
      //console.log(sh.getDevices().length);
      for (let j = 0; j < sh.getDevices().length; j++){
         //console.log(sh.getDevices()[key]);
         let divMed = document.createElement("div");
         divMed.className = "media";
         let divMed1 = document.createElement("div");
         divMed1.className = "media-left media-middle";
         let divMed2 = document.createElement("div");
         divMed2.className = "media-body";
         let a = document.createElement("a");
         a.href = "#";
         let img = document.createElement("img");
         img.className = "media-object";
         let h4 = document.createElement("h4");
         h4.className = "media-heading";
         let p = document.createElement("p");
         p.className = "list-group-item-text";
         h4.innerHTML = sh.getDevices()[j].name;
         p.innerHTML = "Description:<br>Brand: " + sh.getDevices()[j].brand + "<br>Power: " + sh.getDevices()[j].power +" kw/h" + 
         "<br>Energy efficiency class: " + sh.getDevices()[j].energyEfficiencyClass;

         formSH.appendChild(divMed);
         divMed.appendChild(divMed1);
         divMed.appendChild(divMed2);
         divMed1.appendChild(a);
         a.appendChild(img);
         divMed2.appendChild(h4);
         divMed2.appendChild(p);

         if (sh.getDevices()[j].name === "Fridge"){
            img.src = "img/fridge.jpg";
            img.alt = "fridge";
            p.innerHTML += "<br>Capacity: " + sh.getDevices()[j].capacity + " l" + "<br>Number of cameras: " + 
            sh.getDevices()[j].numberOfCameras + "<br>Cooling system: " + sh.getDevices()[j].coolingSystem;
            
         } else if (sh.getDevices()[j].name === "Washing Machine"){
            img.src = "img/wm.jpg";
            img.alt = "washing machine";
            p.innerHTML += "<br>Type: " + sh.getDevices()[j].typeWM + "<br>Max loading: " + sh.getDevices()[j].maxLoading + " kg" +
            "<br>Engines type: " + sh.getDevices()[j].enginesType;
            
         } else if (sh.getDevices()[j].name === "TV"){
            img.src = "img/tv.jpg";
            img.alt = "tv";
            p.innerHTML += "<br>Type: " + sh.getDevices()[j].typeTV + "<br>Diagonal: " + 
            sh.getDevices()[j].diagonal + '"' + "<br>Resolution: " + sh.getDevices()[j].resolution;
            
         }
      }
   }
}

let elemDivDev = document.getElementById("formGrDiv");
let elemsDev = formSH.getElementsByClassName("media");

createSmartHome();
 
let fillDevice = () => {
   for (let i = 0; i < sh.getDevices().length; i++) {
      elemsDev[i].onclick = getStep(i);
   }
}



function getStep(i) {
   return function () {
      $('#switch').bootstrapToggle("enable");
      addBut.disabled = true;
      delBut.disabled = false;
      document.getElementById("name").value = sh.getDevices()[i].name;
      document.getElementById("brand").value = sh.getDevices()[i].brand;
      document.getElementById("power").value = sh.getDevices()[i].power;
      document.getElementById("energyEfficiencyClass").value = sh.getDevices()[i].energyEfficiencyClass;

      let nameDev = elemsDev[i].getElementsByClassName("media-heading");
      if (nameDev[0].innerHTML == "Fridge"){
         
            document.getElementById("labDesc1").innerHTML = "Capacity";
            document.getElementById("labDesc2").innerHTML = "Number of cameras";
            document.getElementById("labDesc3").innerHTML = "Cooling system";

            document.getElementById("desc1").value = sh.getDevices()[i].capacity;
            document.getElementById("desc2").value = sh.getDevices()[i].numberOfCameras;
            document.getElementById("desc3").value = sh.getDevices()[i].coolingSystem;

      } else if (nameDev[0].innerHTML == "Washing Machine"){

            document.getElementById("labDesc1").innerHTML = "Type";
            document.getElementById("labDesc2").innerHTML = "Max loading";
            document.getElementById("labDesc3").innerHTML = "Engines type";

            document.getElementById("desc1").value = sh.getDevices()[i].typeWM;
            document.getElementById("desc2").value = sh.getDevices()[i].maxLoading;
            document.getElementById("desc3").value = sh.getDevices()[i].enginesType;
        
      } else if (nameDev[0].innerHTML == "TV"){

            document.getElementById("labDesc1").innerHTML = "Type";
            document.getElementById("labDesc2").innerHTML = "Diagonal";
            document.getElementById("labDesc3").innerHTML = "Resolution";

            document.getElementById("desc1").value = sh.getDevices()[i].typeTV;
            document.getElementById("desc2").value = sh.getDevices()[i].diagonal;
            document.getElementById("desc3").value = sh.getDevices()[i].resolution;

      } 
   }
   
}

console.log(getStep());

fillDevice();

let frDev1 = document.getElementById("addDevice1");
let frDev2 = document.getElementById("addDevice2");
let frDev3 = document.getElementById("addDevice3");
console.log(frDev1);
console.log(frDev2);
console.log(frDev3);




function chooseAddForm(){
   let elemsInput = document.getElementsByTagName("input");
      
      let cleanInput = () => {
         for (let k = 0;k < elemsInput.length-1; k++) {
            elemsInput[k].value = "";
         }
      }
      

   frDev1.onclick = function () {
      $('#switch').bootstrapToggle("disable");
      addBut.disabled = false;
      delBut.disabled = true;
      cleanInput();
      document.getElementById("name").value = "Fridge";
      document.getElementById("labDesc1").innerHTML = "Capacity";
      document.getElementById("labDesc2").innerHTML = "Number of cameras";
      document.getElementById("labDesc3").innerHTML = "Cooling system"; 
      return false;
   } 
   frDev2.onclick = function () {
      $('#switch').bootstrapToggle("disable");
      addBut.disabled = false;
      delBut.disabled = true;
      cleanInput();
      document.getElementById("name").value = "Washing Machine";
      document.getElementById("labDesc1").innerHTML = "Type";
      document.getElementById("labDesc2").innerHTML = "Max loading";
      document.getElementById("labDesc3").innerHTML = "Engines type";
      return false;      
   }
   frDev3.onclick = function () {
      $('#switch').bootstrapToggle("disable");
      addBut.disabled = false;
      delBut.disabled = true;
      cleanInput();
      document.getElementById("name").value = "TV";
      document.getElementById("labDesc1").innerHTML = "Type";
      document.getElementById("labDesc2").innerHTML = "Diagonal";
      document.getElementById("labDesc3").innerHTML = "Resolution";
      return false;
   }  
}


let addBut = document.getElementById("addBut");

function addingDevice(){
   chooseAddForm();

      addBut.onclick = function (){

      if (document.getElementById("name").value == ("Fridge")){
         
         let tempDev = new Fridge("Fridge", document.getElementById("brand").value, 
            document.getElementById("power").value, document.getElementById("energyEfficiencyClass").value, 
            document.getElementById("desc1").value, document.getElementById("desc2").value, document.getElementById("desc3").value);
         sh.addDevice(tempDev);
         let divMed = document.createElement("div");
         divMed.className = "media";
         let divMed1 = document.createElement("div");
         divMed1.className = "media-left media-middle";
         let divMed2 = document.createElement("div");
         divMed2.className = "media-body";
         let a = document.createElement("a");
         a.href = "#";
         let img = document.createElement("img");
         img.className = "media-object";
         let h4 = document.createElement("h4");
         h4.className = "media-heading";
         let p = document.createElement("p");
         p.className = "list-group-item-text";
         h4.innerHTML = sh.getDevices()[sh.getDevices().length-1].name;
         p.innerHTML = "Description:<br>Brand: " + sh.getDevices()[sh.getDevices().length-1].brand + "<br>Power: " + 
         sh.getDevices()[sh.getDevices().length-1].power +" kw/h" + 
         "<br>Energy efficiency class: " + sh.getDevices()[sh.getDevices().length-1].energyEfficiencyClass;

         

         formSH.appendChild(divMed);
         divMed.appendChild(divMed1);
         divMed.appendChild(divMed2);
         divMed1.appendChild(a);
         a.appendChild(img);
         divMed2.appendChild(h4);
         divMed2.appendChild(p);
         img.src = "img/fridge.jpg";
         img.alt = "fridge";
         p.innerHTML += "<br>Capacity: " + sh.getDevices()[sh.getDevices().length-1].capacity + " l" + "<br>Number of cameras: " + 
         sh.getDevices()[sh.getDevices().length-1].numberOfCameras + "<br>Cooling system: " + 
         sh.getDevices()[sh.getDevices().length-1].coolingSystem;
      
      } else if (document.getElementById("name").value == ("Washing Machine")){
         
         let tempDev = new WashingMachine("Washing Machine", document.getElementById("brand").value, 
            document.getElementById("power").value, document.getElementById("energyEfficiencyClass").value, 
            document.getElementById("desc1").value, document.getElementById("desc2").value, document.getElementById("desc3").value);
         sh.addDevice(tempDev);
         let divMed = document.createElement("div");
         divMed.className = "media";
         let divMed1 = document.createElement("div");
         divMed1.className = "media-left media-middle";
         let divMed2 = document.createElement("div");
         divMed2.className = "media-body";
         let a = document.createElement("a");
         a.href = "#";
         let img = document.createElement("img");
         img.className = "media-object";
         let h4 = document.createElement("h4");
         h4.className = "media-heading";
         let p = document.createElement("p");
         p.className = "list-group-item-text";
         h4.innerHTML = sh.getDevices()[sh.getDevices().length-1].name;
         p.innerHTML = "Description:<br>Brand: " + sh.getDevices()[sh.getDevices().length-1].brand + "<br>Power: " + 
         sh.getDevices()[sh.getDevices().length-1].power +" kw/h" + 
         "<br>Energy efficiency class: " + sh.getDevices()[sh.getDevices().length-1].energyEfficiencyClass;

         

         formSH.appendChild(divMed);
         divMed.appendChild(divMed1);
         divMed.appendChild(divMed2);
         divMed1.appendChild(a);
         a.appendChild(img);
         divMed2.appendChild(h4);
         divMed2.appendChild(p);
         img.src = "img/wm.jpg";
         img.alt = "washing machine";
         p.innerHTML += "<br>Type: " + sh.getDevices()[sh.getDevices().length-1].typeWM + "<br>Max loading: " + 
         sh.getDevices()[sh.getDevices().length-1].maxLoading + " kg" +
         "<br>Engines type: " + sh.getDevices()[sh.getDevices().length-1].enginesType;
      
      } else if (document.getElementById("name").value == ("TV")){
         
         let tempDev = new TV("TV", document.getElementById("brand").value, 
            document.getElementById("power").value, document.getElementById("energyEfficiencyClass").value, 
            document.getElementById("desc1").value, document.getElementById("desc2").value, document.getElementById("desc3").value);
         sh.addDevice(tempDev);
         let divMed = document.createElement("div");
         divMed.className = "media";
         let divMed1 = document.createElement("div");
         divMed1.className = "media-left media-middle";
         let divMed2 = document.createElement("div");
         divMed2.className = "media-body";
         let a = document.createElement("a");
         a.href = "#";
         let img = document.createElement("img");
         img.className = "media-object";
         let h4 = document.createElement("h4");
         h4.className = "media-heading";
         let p = document.createElement("p");
         p.className = "list-group-item-text";
         h4.innerHTML = sh.getDevices()[sh.getDevices().length-1].name;
         p.innerHTML = "Description:<br>Brand: " + sh.getDevices()[sh.getDevices().length-1].brand + "<br>Power: " + 
         sh.getDevices()[sh.getDevices().length-1].power +" kw/h" + 
         "<br>Energy efficiency class: " + sh.getDevices()[sh.getDevices().length-1].energyEfficiencyClass;

         

         formSH.appendChild(divMed);
         divMed.appendChild(divMed1);
         divMed.appendChild(divMed2);
         divMed1.appendChild(a);
         a.appendChild(img);
         divMed2.appendChild(h4);
         divMed2.appendChild(p);
         img.src = "img/tv.jpg";
         img.alt = "tv";
         p.innerHTML += "<br>Type: " + sh.getDevices()[sh.getDevices().length-1].typeTV + "<br>Diagonal: " + 
         sh.getDevices()[sh.getDevices().length-1].diagonal + '"' + "<br>Resolution: " + 
         sh.getDevices()[sh.getDevices().length-1].resolution;
      
      } else alert('"You can add only "Fridge" || "Washing Machine" || "TV"');
      fillDevice();
      return false;
   } 
}

addingDevice();


let delBut = document.getElementById("deleteButton");
console.log(delBut);


/*function delDevice(){
   delBut.onclick = function(){
      for (let i = 0; i < sh.getDevices().length; i++) {
         elemsDev[i].onclick = sh.delDevice(i);
         
      }
      createSmartHome();
      fillDevice();
      return false;
   }
}

delDevice();*/