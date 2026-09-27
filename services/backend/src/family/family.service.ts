import { Injectable } from '@nestjs/common';

@Injectable()
export class FamilyService {
  private readonly connections = [
    {
      id: 'conn-1',
      userId: 'user-1',
      connectedUserId: 'user-2',
      relationshipLabel: 'Parent',
      status: 'approved',
      circle: 'Parents',
    },
  ];

  createConnection(userId: string, body: { uniqueUserId: string; relationshipLabel: string }) {
    return {
      success: true,
      userId,
      targetUniqueUserId: body.uniqueUserId,
      relationshipLabel: body.relationshipLabel,
      status: 'pending',
    };
  }

  getConnections(userId: string) {
    return this.connections.filter((connection) => connection.userId === userId);
  }
}
