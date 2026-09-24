import Member from "../models/member.model.js";

class MemberRepository {
  async create(idUser, workspaceId, role) {
    return await Member.create({
      id_usuario: idUser,
      espacio_trabajo: workspaceId,
      rol: role
    });
  }

  async deleteById(id) {
    return await Member.findByIdAndDelete(id);
  }

  async updateRoleById(id, role) {
    return await Member.findByIdAndUpdate(
      id,
      { rol: role },
      {
        new: true,
        runValidators: true
      }
    );
  }

  async getAllWorkspaceByUserId(userId) {
    //Traer todas las membresias del user
    const result = await Member.find({ id_usuario: userId })
      .populate(
        'espacio_trabajo',
        'nombre fecha_creacion'
      )//Permite expandir referencias, solo valido con propiedades que tengan REF
    console.log(result)
  }

  async getAllMembershipsByWorkspaceId(workspaceId) {
    const result = await Member.find({ espacio_trabajo: workspaceId })
      .populate('id_usuario', 'nombre email')
    console.log(result)

  }
}

const memberRepository = new MemberRepository();
export default memberRepository;
