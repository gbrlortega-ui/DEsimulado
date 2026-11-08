import React from 'react';

interface Props {
  children: React.ReactNode;
  onHome: () => void;
}

interface State {
  error: Error | null;
}

/**
 * Se uma tela quebrar, mostra um aviso com saída em vez de deixar a página em branco.
 * Os documentos já salvos não são afetados.
 */
export class ErrorBoundary extends React.Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error) {
    console.error('[DEsimulados] Erro na tela:', error);
  }

  render() {
    if (!this.state.error) return this.props.children;
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <h1 className="text-2xl font-extrabold">Esta tela não carregou</h1>
          <p className="mt-3 text-ink-2 leading-relaxed">
            Algo deu errado ao abrir esta parte do site. Seus documentos salvos não foram afetados.
            Tente recarregar a página; se continuar, volte ao início.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
            <button className="btn btn-primary" onClick={() => window.location.reload()}>
              Recarregar
            </button>
            <button
              className="btn btn-ghost"
              onClick={() => {
                this.setState({ error: null });
                this.props.onHome();
              }}
            >
              Voltar ao início
            </button>
          </div>
        </div>
      </div>
    );
  }
}
