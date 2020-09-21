import Student from '../models/Student';

class StudentController {
  async index(req, res) {
    try {
      const students = await Student.findAll();

      return res.json({ students });
    } catch (error) {
      return res.json({ error });
    }
  }

  async show(req, res) {
    try {
      const { uid } = req.params;

      const student = await Student.findOne({ where: { uid } });

      return res.json({ student });
    } catch (error) {
      return res.json({ error });
    }
  }

  async store(req, res) {
    try {
      const student = await Student.create(req.body);

      return res.json({ student });
    } catch (error) {
      const response = {
        message: 'dados incorretos',
        error,
      };

      return res.json({ response });
    }
  }

  async update(req, res) {
    try {
      const { uid } = req.params;

      const [updated] = await Student.update(req.body, { where: { uid } });

      if (!updated) {
        throw Error('Aluno não encontrado');
      }

      return res.json({ updated });
    } catch (error) {
      return res.json({ error });
    }
  }

  async delete(req, res) {
    try {
      const { uid } = req.params;
      const deleted = await Student.destroy({ where: { uid } });

      if (!deleted) {
        throw Error('Aluno não encontrado');
      }

      return res.json({ deleted });
    } catch (error) {
      return res.json({ error });
    }
  }
}

export default new StudentController();
