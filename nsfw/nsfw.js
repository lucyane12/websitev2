const express = require('express');
const axios = require('axios');
const nsfw = express.Router();

//Functional
async function anal(){
  try {
    const url = 'https://zeev-x.github.io/json-database/ecchi/anal.json';
    const response = await axios.get(url);
    var rand = Math.floor(Math.random()*response.data.length);
    var result = response.data[rand].img;
    return result;
  } catch (err){
    console.error('Error fetching image URL:', err);
    throw err;
  }
}

async function blackpink(){
  try {
    const url = 'https://zeev-x.github.io/json-database/ecchi/blackpink.json';
    const response = await axios.get(url);
    var rand = Math.floor(Math.random()*response.data.length);
    var result = response.data[rand].img;
    return result;
  } catch (err){
    console.error('Error fetching image URL:', err);
    throw err;
  }
}

async function casual(){
  try {
    const url = 'https://zeev-x.github.io/json-database/ecchi/casual.json';
    const response = await axios.get(url);
    var rand = Math.floor(Math.random()*response.data.length);
    var result = response.data[rand].img;
    return result;
  } catch (err){
    console.error('Error fetching image URL:', err);
    throw err;
  }
}

async function random(){
  try {
    const url = 'https://zeev-x.github.io/json-database/ecchi/database.json';
    const response = await axios.get(url);
    var rand = Math.floor(Math.random()*response.data.length);
    var result = response.data[rand].img;
    return result;
  } catch (err){
    console.error('Error fetching image URL:', err);
    throw err;
  }
}

async function donghua(){
  try {
    const url = 'https://zeev-x.github.io/json-database/ecchi/donghua.json';
    const response = await axios.get(url);
    var rand = Math.floor(Math.random()*response.data.length);
    var result = response.data[rand].img;
    return result;
  } catch (err){
    console.error('Error fetching image URL:', err);
    throw err;
  }
}

async function ecchi(){
  try {
    const x = Math.floor(Math.random()*6)+1;
    const url = `https://zeev-x.github.io/json-database/ecchi/ecchi-${x}.json`;
    const response = await axios.get(url);
    var rand = Math.floor(Math.random()*response.data.length);
    var result = response.data[rand].img;
    return result;
  } catch (err){
    console.error('Error fetching image URL:', err);
    throw err;
  }
}

async function erotic(){
  try {
    const url = 'https://zeev-x.github.io/json-database/ecchi/erotic.json';
    const response = await axios.get(url);
    var rand = Math.floor(Math.random()*response.data.length);
    var result = response.data[rand].img;
    return result;
  } catch (err){
    console.error('Error fetching image URL:', err);
    throw err;
  }
}

async function genshin(){
  try {
    const url = 'https://zeev-x.github.io/json-database/ecchi/genshin.json';
    const response = await axios.get(url);
    var rand = Math.floor(Math.random()*response.data.length);
    var result = response.data[rand].img;
    return result;
  } catch (err){
    console.error('Error fetching image URL:', err);
    throw err;
  }
}

async function nezuko(){
  try {
    const url = 'https://zeev-x.github.io/json-database/ecchi/nezuko.json';
    const response = await axios.get(url);
    var rand = Math.floor(Math.random()*response.data.length);
    var result = response.data[rand].img;
    return result;
  } catch (err){
    console.error('Error fetching image URL:', err);
    throw err;
  }
}

async function thebest(){
  try {
    const url = 'https://zeev-x.github.io/json-database/ecchi/thebest.json';
    const response = await axios.get(url);
    var rand = Math.floor(Math.random()*response.data.length);
    var result = response.data[rand].img;
    return result;
  } catch (err){
    console.error('Error fetching image URL:', err);
    throw err;
  }
}
//...

nsfw.get('/anal',async(req,res) => {
  try {
    const imageUrl = await anal();
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const imageBuffer = Buffer.from(response.data, 'binary');
    res.setHeader('Content-Type', 'image/jpeg');
    res.send(imageBuffer);
  } catch (error) {
    console.error('Error fetching image:', error);
    res.status(500).send('Internal Server Error');
  }
});

nsfw.get('/blackpink',async(req,res) => {
  try {
    const imageUrl = await blackpink();
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const imageBuffer = Buffer.from(response.data, 'binary');
    res.setHeader('Content-Type', 'image/jpeg');
    res.send(imageBuffer);
  } catch (error) {
    console.error('Error fetching image:', error);
    res.status(500).send('Internal Server Error');
  }
});

nsfw.get('/casual',async(req,res) => {
  try {
    const imageUrl = await casual();
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const imageBuffer = Buffer.from(response.data, 'binary');
    res.setHeader('Content-Type', 'image/jpeg');
    res.send(imageBuffer);
  } catch (error) {
    console.error('Error fetching image:', error);
    res.status(500).send('Internal Server Error');
  }
});

nsfw.get('/random',async(req,res) => {
  try {
    const imageUrl = await random();
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const imageBuffer = Buffer.from(response.data, 'binary');
    res.setHeader('Content-Type', 'image/jpeg');
    res.send(imageBuffer);
  } catch (error) {
    console.error('Error fetching image:', error);
    res.status(500).send('Internal Server Error');
  }
});

nsfw.get('/donghua',async(req,res) => {
  try {
    const imageUrl = await donghua();
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const imageBuffer = Buffer.from(response.data, 'binary');
    res.setHeader('Content-Type', 'image/jpeg');
    res.send(imageBuffer);
  } catch (error) {
    console.error('Error fetching image:', error);
    res.status(500).send('Internal Server Error');
  }
});

nsfw.get('/ecchi',async(req,res) => {
  try {
    const imageUrl = await ecchi();
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const imageBuffer = Buffer.from(response.data, 'binary');
    res.setHeader('Content-Type', 'image/jpeg');
    res.send(imageBuffer);
  } catch (error) {
    console.error('Error fetching image:', error);
    res.status(500).send('Internal Server Error');
  }
});

nsfw.get('/erotic',async(req,res) => {
  try {
    const imageUrl = await erotic();
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const imageBuffer = Buffer.from(response.data, 'binary');
    res.setHeader('Content-Type', 'image/jpeg');
    res.send(imageBuffer);
  } catch (error) {
    console.error('Error fetching image:', error);
    res.status(500).send('Internal Server Error');
  }
});

nsfw.get('/genshin',async(req,res) => {
  try {
    const imageUrl = await genshin();
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const imageBuffer = Buffer.from(response.data, 'binary');
    res.setHeader('Content-Type', 'image/jpeg');
    res.send(imageBuffer);
  } catch (error) {
    console.error('Error fetching image:', error);
    res.status(500).send('Internal Server Error');
  }
});

nsfw.get('/nezuko',async(req,res) => {
  try {
    const imageUrl = await nezuko();
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const imageBuffer = Buffer.from(response.data, 'binary');
    res.setHeader('Content-Type', 'image/jpeg');
    res.send(imageBuffer);
  } catch (error) {
    console.error('Error fetching image:', error);
    res.status(500).send('Internal Server Error');
  }
});

nsfw.get('/thebest',async(req,res) => {
  try {
    const imageUrl = await thebest();
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
    const imageBuffer = Buffer.from(response.data, 'binary');
    res.setHeader('Content-Type', 'image/jpeg');
    res.send(imageBuffer);
  } catch (error) {
    console.error('Error fetching image:', error);
    res.status(500).send('Internal Server Error');
  }
});
//exports
module.exports = nsfw;