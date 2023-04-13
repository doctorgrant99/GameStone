import { Auth0Provider } from "@bcwdev/auth0provider";
import { groupsService } from "../services/GroupsService";
import BaseController from "../utils/BaseController";


export class GroupsController extends BaseController {
    constructor() {
        super('api/groups')
        this.router
        .get("", this.getAllGroups)
        .get("/:id", this.getGroupById)
        .use(Auth0Provider.getAuthorizedUserInfo)
        .put("/:id", this.editGroup)
        .post("", this.createGroup)
    }

    async getAllGroups(req, res, next) {
        try {
            let groups = await groupsService.getAllGroups()
            res.send(groups)
        } catch (error) {
            next(error)
        }
    }

    async createGroup(req, res, next) {
        try {
            let groupData = req.body
            groupData.creatorId = req.userInfo.id
            let group = await groupsService.createGroup(groupData)
            res.send(group)
        } catch (error) {
            next(error)
        }
    }

    async getGroupById(req, res, next) {
        try {
            let groupId = req.params.id
            let group = await groupsService.getGroupById(groupId)
            res.send(group)
        } catch (error) {
            next(error)
        }
    }
    async editGroup(req, res, next) {
        try {
            const groupEdit = req.body
            const groupId = req.params.id
            const editedGroup = await groupsService.editGroup(groupEdit, groupId)
            res.send(editedGroup)
        } catch (error) {
            next(error)
        }
    }
}