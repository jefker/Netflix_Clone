package br.edu.uniesp.api.resource;

import br.edu.uniesp.api.model.Serie;
import br.edu.uniesp.api.service.SerieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/serie")
public class SerieResource {

    @Autowired
    private SerieService service;

    @PostMapping
    public Serie salvar(@RequestBody Serie serie) {
        serie = service.salvar(serie);
        return serie;
    }

    @GetMapping
    public List<Serie> listar() {
        return service.listar();
    }

    @DeleteMapping("{id}")
    public void remover(@PathVariable int id) {
        service.remover(id);
    }

    @PutMapping
    public Serie atualizar(@RequestBody Serie serie) throws Exception {
        return service.atualizar(serie);
    }

    @GetMapping("/titulo/{titulo}")
    public List<Serie> ListarSerieTitulo(@PathVariable String titulo) {
        return service.listarSeriePorTitulo(titulo);
    }

}
