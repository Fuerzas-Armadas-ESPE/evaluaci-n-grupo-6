import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../app.module';

describe('AppController (e2e)', () => {
  it('/api/tasks (GET)', () => {
    return request('http://localhost:3000')
      .get('/api/tasks')
      .expect(200)
      .then(response => {
        // Verificar que la respuesta es un array
        expect(Array.isArray(response.body)).toBe(true);

        // Verificar que el primer elemento es un objeto con las propiedades esperadas
        const task = response.body[0];
        expect(typeof task).toBe('object');
        expect(task).toHaveProperty('title');
        expect(task).toHaveProperty('description');
        expect(task).toHaveProperty('done');
      });
  });

  it('/api/tasks (POST)', () => {
    const newTask = {
      title: 'Test task',
      description: 'Test description',
      done: false,
    };
  
    return request('http://localhost:3000')
      .post('/api/tasks')
      .send(newTask)
      .expect(201)
      .then(response => {
        // Verificar que la respuesta es un objeto
        expect(typeof response.body).toBe('object');
  
        // Verificar que la respuesta tiene las propiedades esperadas
        expect(response.body).toHaveProperty('_id');
        expect(response.body.title).toEqual(newTask.title);
        expect(response.body.description).toEqual(newTask.description);
        expect(response.body.done).toEqual(newTask.done);
      });
  }
  );
});