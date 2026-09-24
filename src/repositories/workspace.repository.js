import Workspace from "../models/workspace.model.js";

class WorkspaceRepository {
  async createWorkspace(name, description) {
    await Workspace.create({
      name: name,
      description: description
    })
  }
}

const workspaceRepository = new WorkspaceRepository()
export default workspaceRepository