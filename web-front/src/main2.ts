/**
 * ユーザー管理用の簡易クラスとユーティリティ関数群の例
 * TypeScriptの型安全性とクラス・関数の使い方デモ
 */

type UserRole = 'admin' | 'editor' | 'viewer';

interface User {
    id: number;
    name: string;
    email: string;
    role: UserRole;
    isActive: boolean;
}

class UserManager {
    private users: User[] = [];
    private nextId = 1;

    addUser(name: string, email: string, role: UserRole = 'viewer'): User {
        const user: User = {
            id: this.nextId++,
            name,
            email,
            role,
            isActive: true,
        };
        this.users.push(user);
        return user;
    }

    deactivateUser(id: number): boolean {
        const user = this.users.find(u => u.id === id);
        if (user) {
            user.isActive = false;
            return true;
        }
        return false;
    }

    getActiveUsers(): User[] {
        return this.users.filter(u => u.isActive);
    }

    findUserByEmail(email: string): User | undefined {
        return this.users.find(u => u.email === email);
    }

    promoteUser(id: number): boolean {
        const user = this.users.find(u => u.id === id);
        if (user && user.role !== 'admin') {
            user.role = 'admin';
            return true;
        }
        return false;
    }

    listUsers(): void {
        this.users.forEach(u => {
            console.log(
                `[${u.id}] ${u.name} <${u.email}> (${u.role}) - ${u.isActive ? 'Active' : 'Inactive'}`
            );
        });
    }
}

// デモ用の実行例
const manager = new UserManager();
manager.addUser('山田太郎', 'taro@example.com', 'admin');
manager.addUser('佐藤花子', 'hanako@example.com', 'editor');
manager.addUser('鈴木一郎', 'ichiro@example.com');
manager.deactivateUser(2);
manager.promoteUser(3);

console.log('=== Active Users ===');
console.log(manager.getActiveUsers());

console.log('=== All Users ===');
manager.listUsers();