import Workspace from "../models/workspace.model.js";

class WorkspaceRepository {
  // WORKSPACES -->
  async createWorkSpace(nombre, descripcion) {
    const result = await Workspace.create({
      nombre: nombre,
      descripcion: descripcion
    })
    return result
  }

  async getByID(workspaceId) {
    const result = await Workspace.findById(workspaceId)
    return result
  }

  async deleteById(workspaceId) {
    const result = await Workspace.findByIdAndDelete(workspaceId)
    return result
  }

  async updateById(workspaceId, nombre, descripcion) {
    const result = await Workspace.findByIdAndUpdate(workspaceId, { nombre, descripcion }, { new: true })
    return result
  }
}

const workspaceRepository = new WorkspaceRepository()
export default workspaceRepository