# Supabase Starter Template

Welcome to the Supabase Starter Template! This repository provides a robust starting point for building applications with Supabase, an open-source Firebase alternative that combines the power of PostgreSQL with real-time capabilities, authentication, and storage.

## Features

- **Authentication**: Secure user authentication using Supabase Auth.
- **Database**: Pre-configured PostgreSQL database with table structures for users, profiles, and more.
- **Real-time**: Real-time database subscriptions to sync data across clients seamlessly.
- **Storage**: Built-in file storage system for handling media uploads.
- **API**: Automatically generated RESTful APIs for your database tables.
- **TypeScript**: Written in TypeScript for better type safety and developer experience.
- **Next.js Integration**: Ready to be used with Next.js for server-side rendering and static site generation.

## Getting Started

Follow these steps to set up the project locally:

### Prerequisites

- Node.js (>=14.x)
- npm (>=6.x) or yarn (>=1.x)
- Supabase account and project setup

### Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/Abdullah-dev0/Supabase_starter.git
    cd Supabase_starter
    ```

2. **Install dependencies:**

    ```sh
    npm install
    # or
    yarn install
    ```

3. **Set up environment variables:**

    Create a `.env.local` file in the root directory and add your Supabase credentials:

    ```env
    NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
    ```

4. **Run the development server:**

    ```sh
    npm run dev
    # or
    yarn dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `pages/`: Contains the Next.js pages.
- `components/`: Reusable React components.
- `lib/`: Utilities and Supabase client setup.
- `styles/`: Global styles and styled-components.

## Contributing

We welcome contributions! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Supabase](https://supabase.io) - The open-source Firebase alternative.
- [Next.js](https://nextjs.org) - The React framework for production.
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework.

## Contact

If you have any questions or feedback, feel free to reach out:

- GitHub Issues: [https://github.com/Abdullah-dev0/Supabase_starter/issues](https://github.com/Abdullah-dev0/Supabase_starter/issues)
