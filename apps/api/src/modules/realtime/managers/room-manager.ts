export class RoomManager<TClient> {
  private rooms = new Map<string, Set<TClient>>();

  join(docId: string, client: TClient) {
    if (!this.rooms.has(docId)) {
      this.rooms.set(docId, new Set());
    }
    this.rooms.get(docId)!.add(client);
  }

  leave(docId: string, client: TClient) {
    this.rooms.get(docId)?.delete(client);
  }

  getClients(docId: string) {
    return this.rooms.get(docId) || new Set();
  }

  removeClientFromAll(client: TClient) {
    for (const clients of this.rooms.values()) {
      clients.delete(client);
    }
  }
}
