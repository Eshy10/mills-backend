const request = require('supertest');
const app = require('../server'); 
const mongoose = require('mongoose');
const Dumpsite = require('../models/Dumpsite');

// to replace this env with env test 
beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

beforeEach(async () => {
    await Dumpsite.deleteMany({});
})

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Dumpsite API', () => {
  
  describe('Dumpsite API', () => {
    it('should create a new dumpsite', async () => {
      const dumpsiteData = {
        latitude: 10.6789,
        longitude: -45.1234,
        capacity: 500,
        status: 'active',
      };
  
      const res = await request(app)
        .post('/api/dumpsites')
        .send(dumpsiteData);
  
      expect(res.statusCode).toEqual(201);
  
      expect(res.body).toHaveProperty('_id');
      expect(res.body).toHaveProperty('location');
      expect(res.body).toHaveProperty('capacity', dumpsiteData.capacity);
      expect(res.body).toHaveProperty('status', dumpsiteData.status);
  
      expect(res.body.location).toHaveProperty('type', 'Point');
      expect(res.body.location).toHaveProperty('coordinates');
      expect(Array.isArray(res.body.location.coordinates)).toBe(true);
      expect(res.body.location.coordinates).toEqual([
        dumpsiteData.longitude,
        dumpsiteData.latitude,
      ]);
    });
  });
  

  it('should get all dumpsites', async () => {
    const res = await request(app).get('/api/dumpsites');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});