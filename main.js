function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true})
    classifier = m15.soundClassifier('https://teachablemachine.withgoogle.com/models/7kpe504mh/model.json',modelReddy);
}