const request = require('supertest');
const app = require('../index');


// test for post API
describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    const res = await request(app)
      .post('/api/items')
      .send({
        name: 'rohit',
        price: 300
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('message', 'item created');
    expect(res.body).toHaveProperty('success', true);
  });
});
// test for GET /api/items
describe('Get Endpoints', () => {
    it('should retrieve items', async () => {
      const res = await request(app).get('/api/items');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('name');
      expect(res.body.name).toBeInstanceOf(Array);
      expect(res.body).toHaveProperty('success', true);
    });
  // Test for GET /api/items/:id
  describe('GET /api/items/:id', () => {
    it('should retrieve a single item', async () => {
      const itemId = '64919b39f68f9c74e6b7b022'; // Enter a valid item ID
      const res = await request(app).get(`/api/items/${itemId}`);
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('item');
      expect(res.body.success).toBe(true);
    });
  });

  // Test for PUT /api/items/:id
  describe('PUT /api/items/:id', () => {
    it('should update an existing item', async () => {
      const itemId = '64919b39f68f9c74e6b7b022';
      const updatedItem = {
        name: 'Updated Item',
        price: 200
      };
      const res = await request(app)
        .put(`/api/items/${itemId}`)
        .send(updatedItem);
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('item');
      expect(res.body.success).toBe(true);
    });
  });

  // Test for DELETE /api/items/:id
  describe('DELETE /api/items/:id', () => {
    it('should delete an existing item', async () => {
      const itemId = '64919b39f68f9c74e6b7b022';
      const res = await request(app).delete(`/api/items/${itemId}`);
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('message', 'Item deleted successfully');
      expect(res.body.success).toBe(true);
    });
  });
});
  
  